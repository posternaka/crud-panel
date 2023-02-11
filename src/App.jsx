import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from "./pages/Registration";
import PrivateRoutes from './router/index';
import NotFound from './pages/NotFound';

import { URL, STATUS_BLOCK } from './globalconsts';

const App = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [access, setAccess] = useState({});

    useEffect(() => {
      const user = users.find(it => it.id === access.id);
      if ((!user && access.id) || (user && user.status_user === STATUS_BLOCK)) { 
        setAccess({});
        navigate('/');
      }
    }, [users, access, setAccess, navigate]);

    const getUsers = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Routes>
        <Route exact path="/" element={<Login users={users} getUsers={getUsers} setAccess={setAccess} />} />
        <Route path="/registration" element={<Registration getUsers={getUsers} setAccess={setAccess} />} />
        <Route element={<PrivateRoutes access={access} />}>
          <Route path="/users" element={<Home users={users} user={access} getUsers={getUsers} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default App;
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from "./pages/Registration";
import NotFound from './pages/NotFound';
import PrivateRoutes from './router/index';

import { STATUS_BLOCK } from './globalconsts';

const App = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [access, setAccess] = useState({});

    useEffect(() => {
      const user = users.find(it => it.id === access.id);
      if ((!user && access.id) || (user && user.status_user === STATUS_BLOCK)) { 
        setAccess({});
        navigate('/login');
      }
    }, [users, access, setAccess, navigate]);

    const getUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login users={users} getUsers={getUsers} setAccess={setAccess} />} />
        <Route path="/registration" element={<Registration getUsers={getUsers} setAccess={setAccess} />} />
        <Route element={<PrivateRoutes access={access} />}>
          <Route path="/" element={<Home users={users} user={access} getUsers={getUsers} />} />
        </Route>
      </Routes>
    )
}

export default App;
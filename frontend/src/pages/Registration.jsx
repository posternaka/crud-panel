import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


import Button from '../components/UI/button/Button';

const Registration = ({ getUsers, setAccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', {
                name,
                email,
                password,
                status_user: "Unblock",
            });
            await getUsers();
            setAccess(response.data);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveUser}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input 
                                type="password"
                                className="input" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <Button type="submit" className="mr-5 button is-success is-light">Sign Up</Button>
                        <Link to="/login" className="button is-info is-light">Go Back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;
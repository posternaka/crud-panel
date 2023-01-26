import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../rest/rests";

import Button from "../components/UI/button/Button";

const Login = ({ users, getUsers, setAccess }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [blocked, setBlocked] = useState(false);
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        const user = await signIn(name, password);
        // const user = users.find(user => user.name === name && user.password === password);
        if(!user) {
            return navigate('/registration');
        } else if (user.status_user === 'Block') {
            setBlocked(true);
            return;
        } else if(user.status_user === 'Unblock') {
            await getUsers();
            setAccess(user);
            return navigate('/'); 
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
                    {  
                        blocked
                        ?
                        <p className="is-size-5 has-text-danger-dark">You are blocked.</p>
                        :
                        null
                    }
                    <p>If you don't have an account, then <Link to='/registration'>Sign Up</Link></p>
                    <div className="field">
                        <Button type="submit" className="mt-5 button is-success is-light">Sign In</Button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
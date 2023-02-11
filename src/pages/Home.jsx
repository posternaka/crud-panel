import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateUsers, deleteUsers } from "../rest/rests";

import Button from "../components/UI/button/Button";
import Tab from "../components/UI/tab/Tab";
import Table from "../components/UI/table/Table";

import { STATUS_UNBLOCK, STATUS_BLOCK, STATUS_DELETE } from '../globalconsts';

const UserList = ({ users, user, getUsers }) => {
    const navigate = useNavigate();
    const signOut = () => navigate('/');
    const [choice, setChoice] = useState([]);

    const  getMethods = async (current) => {
        switch(current) {
            case STATUS_UNBLOCK: {
                const result = choice.map(id => ({
                    id,
                    status_user: STATUS_UNBLOCK
                }));
                await updateUsers(result);
                break;
            }

            case STATUS_BLOCK: {
                const result = choice.map(id => ({
                    id,
                    status_user: STATUS_BLOCK
                }));
                await updateUsers(result);
                break;
            }
            
            case STATUS_DELETE: {
                await deleteUsers(choice);
                setChoice([]);
                break;
            }
            
            default: {
                return null
            }
        }

        getUsers();
    }



    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <div className="mb-5 is-flex is-align-items-center is-justify-content-space-between">
                    <h1 className="is-size-2 has-text-weight-bold">Welcome: {user.name}</h1>
                    <Button className="button is-light" onClick={() => signOut()}>Sign out</Button>
                </div>
                <Tab statuses={[STATUS_UNBLOCK, STATUS_BLOCK, STATUS_DELETE]} disabled={!choice.length} getMethods={getMethods}/>
                <Table user_id={user.id} users={users} choice={choice} setChoice={setChoice} />
            </div>
        </div>
    )
}

export default UserList
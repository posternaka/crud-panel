import { formatDate } from '../../../utils/date';

const Table = ({ user_id, users, choice, setChoice }) => {
    const check = (id, e) => {
        if (e.target.checked) {
            setChoice([...choice, id]);
        } else {
            setChoice(choice.filter(user => user !== id));
        }
    }

    const multiCheck = (e) => {
        const onlyIdUsers = users.map(user => user.id);
        if (e.target.checked) {
            setChoice(onlyIdUsers);
        } else {
            setChoice([]);
        }
    }

    return (
        <table className='table is-striped is-fullwidth' >
            <thead>
                <tr>
                    <th>
                        <p>select all/ nobody</p>
                        <input 
                            type="checkbox"
                            onChange={(e) => multiCheck(e)}
                            checked={users.length === choice.length}
                        />
                    </th>
                    <th>№</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registration date</th>
                    <th>Last time was</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={user.id} className={ user.id === user_id ? "is-selected" : ''}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={(e) => check(user.id, e)}
                                    checked={choice.includes(user.id)}
                                />
                            </td>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{formatDate(user.createdAt)}</td>
                            <td>{formatDate(user.time_was)}</td>
                            <td>{user.status_user}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
import Button from "../button/Button";

const Tab = ({ statuses, disabled, getMethods }) => {

    const handle = (status) => {
        getMethods(status);
    }

    return (
        <div className="tabs is-toggle is-toggle-rounded is-align-content-center">
            <ul className="is-justify-content-center">
                {
                    statuses.map((it, index) => (
                        <li key={index} onClick={() => handle(it)} >
                            <Button className="button is-light" disabled={disabled} >{it}</Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tab;
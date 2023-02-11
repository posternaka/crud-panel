import { Link } from "react-router-dom";
import Button from "../components/UI/button/Button";

const NotFound = () => {
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1 className="is-size-1">The requested resource is not found. Try again.</h1>
                <Link to="/">
                    <Button className="button mt-5 is-light">Go Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
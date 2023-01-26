import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ access }) => {
    return (
        access.id ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;
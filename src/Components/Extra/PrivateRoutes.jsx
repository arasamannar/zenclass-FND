import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet />: <Navigate to='/login'/>
}
export default PrivateRoutes;
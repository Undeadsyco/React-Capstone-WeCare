import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Utils/useAuth";

const PrivateRoute = () => {
  const { checkAuth } = useAuth();
  console.log(checkAuth())
  return checkAuth() ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

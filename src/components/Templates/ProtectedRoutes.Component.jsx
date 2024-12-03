import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = Cookies.get("type");

  console.log("location :", location, isLoggedIn);

  if (!isLoggedIn && location.pathname !== "/") {
    // Redirect to login
    return <Navigate to="/" replace />;
  }

  if (isLoggedIn && location.pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  console.log("Re-Rendering UI");
  return children;
};

export default ProtectedRoutes;

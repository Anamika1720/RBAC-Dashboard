import { Link } from "react-router-dom";
import Logout from "../Functionalities/LogoutButton";
import "../Styles/AEV.css";
const Viewer = () => {
  return (
    <div className="admin-page">
      <h1 className="admin-title">Viewer Page</h1>
      <div className="admin-buttons">
        <Link to="/user-management-readonly">
          <button>User Management</button>
        </Link>
        <Link to="/role-permission-management-readonly">
          <button>Role and Permission Management</button>
        </Link>
      </div>
      <Logout />
    </div>
  );
};
export default Viewer;

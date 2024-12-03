import { Link } from "react-router-dom";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">RBAC Dashboard</h1>
      <div className="dashboard-buttons">
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/editor">
          <button>Editor</button>
        </Link>
        <Link to="/viewer">
          <button>Viewer</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

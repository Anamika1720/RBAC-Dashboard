import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.Layout";
import ProtectedRoutes from "./components/Templates/ProtectedRoutes.Component";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserManagement from "./components/Templates/UserManagement/UserManagement";
import RolePermissionManagement from "./components/Templates/Role&PermissionManagement/Role&PermissionManagement";

const ProtectedRouteWrapper = ({ element }) => (
  <ProtectedRoutes>{element}</ProtectedRoutes>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<ProtectedRouteWrapper element={<Dashboard />} />}
          />
          <Route
            path="/home"
            element={<ProtectedRouteWrapper element={<Homepage />} />}
          />
          <Route
            path="/user-management"
            element={<ProtectedRouteWrapper element={<UserManagement />} />}
          />
          <Route
            path="/role-permission-management"
            element={
              <ProtectedRouteWrapper element={<RolePermissionManagement />} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

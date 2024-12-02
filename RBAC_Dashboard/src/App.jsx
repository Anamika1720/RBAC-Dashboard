import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Editor from "./pages/Editor";
import Viewer from "./pages/Viewer";
import UserManagement from "./components/UserManagement";
import UserManagementReadOnly from "./components/UserManagementReadOnly";
import RolePermissionManagement from "./components/Role&PermissionManagement";
import RolePermissionManagementReadOnly from "./components/Role&PermissionReadOnly";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [roles, setRoles] = useState(() => {
    const savedRoles = localStorage.getItem("roles");
    return savedRoles ? JSON.parse(savedRoles) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  const handleAddUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/admin"
            element={
              <Admin
                users={users}
                roles={roles}
                onAddUser={handleAddUser}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
                setRoles={setRoles}
              />
            }
          />
          <Route
            path="/editor"
            element={
              <Editor
                users={users}
                roles={roles}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
              />
            }
          />
          <Route
            path="/user-management"
            element={
              <UserManagement
                users={users}
                onAddUser={handleAddUser}
                onEditUser={handleEditUser}
                onDeleteUser={handleDeleteUser}
              />
            }
          />
          <Route
            path="/user-management-readonly"
            element={<UserManagementReadOnly users={users} />}
          />
          <Route
            path="/role-permission-management"
            element={
              <RolePermissionManagement roles={roles} setRoles={setRoles} />
            }
          />
          <Route
            path="/role-permission-management-readonly"
            element={<RolePermissionManagementReadOnly roles={roles} />}
          />
          <Route
            path="/viewer"
            element={<Viewer users={users} roles={roles} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

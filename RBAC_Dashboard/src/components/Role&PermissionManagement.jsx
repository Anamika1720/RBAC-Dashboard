import React, { useState } from "react";
import Logout from "../Functionalities/LogoutButton";
import "../Styles/RolePermissionManagement.css";

const RolePermissionManagement = ({ roles, setRoles }) => {
  const [newRole, setNewRole] = useState({ roleName: "", permissions: [] });
  const [editingRole, setEditingRole] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");

  const handleAddRole = () => {
    const updatedRoles = [...roles, { id: roles.length + 1, ...newRole }];
    setRoles(updatedRoles);
    setNewRole({ roleName: "", permissions: [] });
    setShowAddForm(false);
  };

  const handleEditRole = (role) => {
    setNewRole({
      roleName: role.roleName,
      permissions: role.permissions.split(","),
    });
    setEditingRole(role.id);
    setShowAddForm(true);
    setSelectedRole(role.roleName);
  };

  const handleUpdateRole = () => {
    const updatedRoles = roles.map((role) =>
      role.id === editingRole
        ? { ...role, ...newRole, permissions: newRole.permissions.join(",") }
        : role
    );
    setRoles(updatedRoles);
    setNewRole({ roleName: "", permissions: [] });
    setEditingRole(null);
    setShowAddForm(false);
  };

  const handleDeleteRole = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
  };

  const handlePermissionChange = (permission) => {
    setNewRole((prev) => {
      const permissions = prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission];
      return { ...prev, permissions };
    });
  };

  return (
    <div className="role-permission-management">
      <h2>Role and Permission Management</h2>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel" : "Add New Role"}
      </button>
      {showAddForm && (
        <div className="role-form">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="Select Role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Viewer">Viewer</option>
          </select>
          <div className="permissions">
            <h4>Permissions:</h4>
            <label>
              <input
                type="checkbox"
                checked={newRole.permissions.includes("Read")}
                onChange={() => handlePermissionChange("Read")}
              />
              Read
            </label>
            <label>
              <input
                type="checkbox"
                checked={newRole.permissions.includes("Write")}
                onChange={() => handlePermissionChange("Write")}
              />
              Write
            </label>
            <label>
              <input
                type="checkbox"
                checked={newRole.permissions.includes("Delete")}
                onChange={() => handlePermissionChange("Delete")}
              />
              Delete
            </label>
          </div>
          <button onClick={editingRole ? handleUpdateRole : handleAddRole}>
            {editingRole ? "Update Role" : "Add Role"}
          </button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.roleName}</td>
              <td>{role.permissions}</td>
              <td>
                <button onClick={() => handleEditRole(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Logout />
    </div>
  );
};

export default RolePermissionManagement;

import { useState } from "react";
import Cookies from "js-cookie";
import { useUserContext } from "../../../Contexts/Users.Context";
import Header from "../../Organisms/Header/Header.Component";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  AddRoleButton,
  Permissions,
  RoleForm,
  RoleSelect,
  RolePermissionContainer,
  RoleTable,
  SubmitButton,
  CancelButton,
  FlexContainer,
} from "./RolePermissionManagement.Styles";

const RolePermissionManagement = () => {
  const userType = Cookies.get("type");
  const { roles, onSetRoles } = useUserContext();

  const [newRole, setNewRole] = useState({ roleName: "", permissions: [] });
  const [editingRole, setEditingRole] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleAddRole = () => {
    if (!newRole.roleName.trim() || newRole.permissions.length === 0) {
      setError("Role name and permission are required.");
      return;
    }
    const updatedRoles = [...roles, { id: roles.length + 1, ...newRole }];
    onSetRoles(updatedRoles);
    setNewRole({ roleName: "", permissions: [] });
    setShowAddForm(false);
    setError("");
  };

  const handleEditRole = (role) => {
    setNewRole({
      roleName: role.roleName,
      permissions: Array.isArray(role.permissions)
        ? role.permissions
        : role.permissions.split(","),
    });
    setEditingRole(role.id);
    setShowAddForm(true);
    setSelectedRole(role.roleName);
  };

  const handleUpdateRole = () => {
    if (!newRole.roleName.trim() || newRole.permissions.length === 0) {
      setError("Role name and at least one permission are required.");
      return;
    }
    const updatedRoles = roles.map((role) =>
      role.id === editingRole
        ? { ...role, ...newRole, permissions: newRole.permissions.join(",") }
        : role
    );
    onSetRoles(updatedRoles);
    setNewRole({ roleName: "", permissions: [] });
    setEditingRole(null);
    setShowAddForm(false);
    setError("");
  };

  const handleDeleteRole = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    onSetRoles(updatedRoles);
  };

  const handlePermissionChange = (permission) => {
    setNewRole((prev) => {
      const permissions = prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission];
      return { ...prev, permissions };
    });
  };

  const handleRoleSelection = (e) => {
    const selectedRoleName = e.target.value;
    setSelectedRole(selectedRoleName);
    setNewRole((prev) => ({
      ...prev,
      roleName: selectedRoleName,
    }));
  };

  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <RolePermissionContainer>
        <h2>Role and Permission Management</h2>
        {userType !== "Viewer" && (
          <>
            <input
              type="text"
              placeholder="Search Roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: "20px", padding: "8px", width: "200px" }}
            />
            <AddRoleButton onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? "Cancel" : "Add New Role"}
            </AddRoleButton>
          </>
        )}
        {showAddForm && (
          <RoleForm>
            <FlexContainer>
              <RoleSelect value={selectedRole} onChange={handleRoleSelection}>
                <option value="Select Role">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </RoleSelect>
              <Permissions>
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
              </Permissions>
              <SubmitButton
                onClick={editingRole ? handleUpdateRole : handleAddRole}
              >
                {editingRole ? "Update Role" : "Add Role"}
              </SubmitButton>
            </FlexContainer>
            {error && (
              <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
            )}
          </RoleForm>
        )}
        <RoleTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Role Name</th>
              <th>Permissions</th>
              {userType !== "Viewer" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.roleName}</td>
                <td>{role.permissions}</td>
                {userType !== "Viewer" && (
                  <td>
                    <button onClick={() => handleEditRole(role)}>
                      <EditIcon />
                    </button>
                    <button onClick={() => handleDeleteRole(role.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </RoleTable>
      </RolePermissionContainer>
    </>
  );
};

export default RolePermissionManagement;

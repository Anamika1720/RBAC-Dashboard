import { useState, useEffect } from "react";
import { useUserContext } from "../../../Contexts/Users.Context";
import Header from "../../Organisms/Header/Header.Component";
import EditIcon from "@mui/icons-material/Edit";
import Cookies from "js-cookie";

import {
  RoleForm,
  RolePermissionContainer,
  RoleTable,
  SubmitButton,
  FlexContainer,
  StyledInput,
} from "./RolePermissionManagement.Styles";

const RolePermissionManagement = () => {
  const { roles, onSetRoles } = useUserContext();
  const [localRoles, setLocalRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null);
  const [newPermissions, setNewPermissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const userType = Cookies.get("type");

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles"));

    if (storedRoles && storedRoles.length > 0) {
      setLocalRoles(storedRoles);
    } else {
      const defaultRoles = [
        { id: 1, roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
        { id: 2, roleName: "Editor", permissions: ["Read", "Write"] },
        { id: 3, roleName: "Viewer", permissions: ["Read"] },
      ];
      setLocalRoles(defaultRoles);
      localStorage.setItem("roles", JSON.stringify(defaultRoles));
    }
  }, []);

  const handleEditRole = (role) => {
    setNewPermissions(role.permissions);
    setEditingRole(role.id);
  };

  const handleUpdateRole = () => {
    if (newPermissions.length === 0) {
      setError("At least one permission is required.");
      return;
    }
    const updatedRoles = localRoles.map((role) =>
      role.id === editingRole ? { ...role, permissions: newPermissions } : role
    );
    setLocalRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
    setEditingRole(null);
    setNewPermissions([]);
    setError("");
  };

  const handlePermissionChange = (permission) => {
    setNewPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  const filteredRoles = localRoles.filter((role) =>
    role.roleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <RolePermissionContainer>
        <h2>Role and Permission Management</h2>
        <input
          type="text"
          placeholder="Search Roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "20px", padding: "8px", width: "200px" }}
        />
        <RoleTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Role Name</th>
              <th>Permissions</th>
              {userType !== "Viewer" && userType !== "Editor" && (
                <th>Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.roleName}</td>
                <td>{role.permissions.join(", ")}</td>
                {userType !== "Viewer" && userType !== "Editor" && (
                  <td>
                    <button onClick={() => handleEditRole(role)}>
                      <EditIcon />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </RoleTable>
        {editingRole && (
          <RoleForm>
            <FlexContainer>
              <div>
                <label>Role Name:</label>
                <StyledInput
                  type="text"
                  value={
                    localRoles.find((role) => role.id === editingRole)
                      ?.roleName || ""
                  }
                  disabled
                />
              </div>
              <div>
                <label>Permissions:</label>
                <label>
                  <StyledInput
                    type="checkbox"
                    checked={newPermissions.includes("Read")}
                    onChange={() => handlePermissionChange("Read")}
                  />
                  Read
                </label>
                <label>
                  <StyledInput
                    type="checkbox"
                    checked={newPermissions.includes("Write")}
                    onChange={() => handlePermissionChange("Write")}
                  />
                  Write
                </label>
                <label>
                  <StyledInput
                    type="checkbox"
                    checked={newPermissions.includes("Delete")}
                    onChange={() => handlePermissionChange("Delete")}
                  />
                  Delete
                </label>
              </div>
              <SubmitButton onClick={handleUpdateRole}>
                Update Permissions
              </SubmitButton>
            </FlexContainer>
            {error && (
              <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
            )}
          </RoleForm>
        )}
      </RolePermissionContainer>
    </>
  );
};

export default RolePermissionManagement;

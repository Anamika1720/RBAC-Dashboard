import { useState, useEffect, useMemo } from "react";
import Header from "../../Organisms/Header/Header.Component";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  RolePermissionContainer,
  RoleTable,
  StyledInput,
  ActionButton,
} from "./RolePermissionManagement.Styles";
import { getCurrentUserPermission } from "../../../services/iam/iam.service";

const RolePermissionManagement = () => {
  const [localRoles, setLocalRoles] = useState([]);
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [newPermissions, setNewPermissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles"));
    setLocalRoles(storedRoles);
  }, []);

  const handleEditRole = (role) => {
    setEditingRoleId(role.id);
    setNewPermissions(role.permissions);
  };

  const handleUpdateRole = () => {
    if (newPermissions.length === 0) {
      setError("At least one permission is required.");
      return;
    }
    const updatedRoles = localRoles.map((role) =>
      role.id === editingRoleId
        ? { ...role, permissions: newPermissions }
        : role
    );
    setLocalRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
    setEditingRoleId(null);
    setNewPermissions([]);
    setError("");
  };

  const handleCancelEdit = () => {
    setEditingRoleId(null);
    setNewPermissions([]);
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

  const userPermissions = useMemo(() => {
    return getCurrentUserPermission();
  }, []);

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
          style={{ marginBottom: "20px", padding: "8px" }}
        />
        <RoleTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Role Name</th>
              <th>Permissions</th>
              {(userPermissions?.Write || userPermissions?.Delete) && (
                <th className="actions">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role) => (
              <tr key={role.id}>
                <td className="id">{role.id}</td>
                <td className="role">{role.roleName}</td>
                <td className="permissions">
                  {editingRoleId === role.id ? (
                    <div>
                      {["Read", "Write", "Delete"].map((perm) => (
                        <label key={perm}>
                          <StyledInput
                            type="checkbox"
                            checked={newPermissions.includes(perm)}
                            onChange={() => handlePermissionChange(perm)}
                          />
                          {perm}
                        </label>
                      ))}
                    </div>
                  ) : (
                    role.permissions.join(", ")
                  )}
                </td>

                {(userPermissions?.Write || userPermissions?.Delete) && (
                  <td className="actions">
                    {editingRoleId === role.id ? (
                      <>
                        <ActionButton
                          className="save"
                          onClick={handleUpdateRole}
                        >
                          <SaveIcon /> Update
                        </ActionButton>
                        <ActionButton
                          className="cancel"
                          onClick={handleCancelEdit}
                        >
                          <CancelIcon /> Cancel
                        </ActionButton>
                      </>
                    ) : (
                      userPermissions?.Write && (
                        <ActionButton
                          className="edit"
                          onClick={() => handleEditRole(role)}
                        >
                          <EditIcon /> Edit
                        </ActionButton>
                      )
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </RoleTable>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </RolePermissionContainer>
    </>
  );
};

export default RolePermissionManagement;

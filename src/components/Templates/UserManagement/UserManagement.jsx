import { useState, useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import { useUserContext } from "../../../Contexts/Users.Context";
import AddButton from "../../../Functionalities/AddUser/AddButton";
import Header from "../../Organisms/Header/Header.Component";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  EditUserForm,
  SearchInput,
  Status,
  Table,
  UserManagementContainer,
} from "./UserManagement.Styles";
import ValidMobileNumberInput from "../../../Functionalities/ValidMobileNo";
import {
  getCurrentUserPermission,
  hasPermission,
} from "../../../services/iam/iam.service";

const UserManagement = () => {
  const userType = Cookies.get("type");
  const { users = [], onAddUser, onEditUser, onDeleteUser } = useUserContext();

  const [editUserId, setEditUserId] = useState(null); // Track user being edited
  const [editUserData, setEditUserData] = useState(null); // Track user data being edited
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [roles, setRoles] = useState([]); // Roles from localStorage
  const [currentPermissions, setCurrentPermissions] = useState([]);

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(storedRoles);
  }, []);

  const getPermissionsForRole = (roleName) => {
    const role = roles.find((r) => r.roleName === roleName);
    return role?.permissions || [];
  };

  const handleRoleChange = (newRole) => {
    const permissions = getPermissionsForRole(newRole);
    setCurrentPermissions(permissions);
    setEditUserData((prev) => ({ ...prev, role: newRole, permissions }));
  };

  const handleUpdateUser = () => {
    setErrorMessage("");

    if (!editUserData?.name || !editUserData?.mobileNo || !editUserData?.role) {
      setErrorMessage("Name, Mobile No, and Role are required fields.");
      return;
    }

    onEditUser(editUserData);
    setEditUserId(null); // Reset editing state
    setEditUserData(null);
  };

  const handleCancelEdit = () => {
    setEditUserId(null); // Reset editing state
    setEditUserData(null);
  };

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    return users
      .filter((user) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        return (
          user.name.toLowerCase().includes(lowercasedSearchTerm) ||
          user.mobileNo.toLowerCase().includes(lowercasedSearchTerm) ||
          user.role.toLowerCase().includes(lowercasedSearchTerm)
        );
      })
      .map((user) => ({
        ...user,
        permissions: getPermissionsForRole(user.role),
      }));
  }, [searchTerm, users, roles]);

  const userPermissions = useMemo(() => {
    return getCurrentUserPermission();
  }, []);

  const renderActions = (user) => {
    if (!userPermissions?.Write && !userPermissions?.Delete) return null;

    return (
      <td>
        {editUserId === user.id ? (
          <>
            <button onClick={handleUpdateUser}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            {userPermissions?.Write && (
              <button
                onClick={() => {
                  setEditUserId(user.id);
                  setEditUserData({ ...user });
                  handleRoleChange(user.role);
                }}
              >
                <EditIcon />
              </button>
            )}

            {userPermissions?.Delete && (
              <button onClick={() => onDeleteUser(user.id)}>
                <DeleteIcon />
              </button>
            )}
          </>
        )}
      </td>
    );
  };

  return (
    <>
      <Header />
      <UserManagementContainer>
        <h2>{userType} User Management</h2>

        <SearchInput
          type="text"
          placeholder="Search Users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {(userPermissions?.Write || userPermissions?.Delete) && (
          <AddButton onAddUser={onAddUser} />
        )}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Role</th>
              <th>Permissions</th>
              <th>Status</th>
              {(userPermissions?.Write || userPermissions?.Delete) && (
                <th>Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      value={editUserData?.name || ""}
                      onChange={(e) =>
                        setEditUserData({
                          ...editUserData,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <ValidMobileNumberInput
                      value={editUserData?.mobileNo || ""}
                      onChange={(mobileNo) =>
                        setEditUserData({ ...editUserData, mobileNo })
                      }
                    />
                  ) : (
                    user.mobileNo
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <select
                      value={editUserData?.role || "Select Role"}
                      onChange={(e) => handleRoleChange(e.target.value)}
                    >
                      <option value="Select Role">Select Role</option>
                      {roles.map((role) => (
                        <option key={role.id} value={role.roleName}>
                          {role.roleName}
                        </option>
                      ))}
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <p>
                      Assigned Permissions:{" "}
                      {(currentPermissions || []).join(", ") || "None"}
                    </p>
                  ) : (
                    (user.permissions || []).join(", ") || "None"
                  )}
                </td>
                <td>
                  <Status className={user.status.toLowerCase()}>
                    {user.status}
                  </Status>
                </td>
                {renderActions(user)}
              </tr>
            ))}
          </tbody>
        </Table>
      </UserManagementContainer>
    </>
  );
};

export default UserManagement;

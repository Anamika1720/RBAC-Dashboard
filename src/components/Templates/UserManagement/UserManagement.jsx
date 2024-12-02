import { useState } from "react";
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

const UserManagement = () => {
  const userType = Cookies.get("type");
  console.log("userType", userType);

  const { users = [], onAddUser, onEditUser, onDeleteUser } = useUserContext();

  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateUser = () => {
    setErrorMessage("");

    if (!editUser?.name || !editUser?.mobileNo || !editUser?.role) {
      setErrorMessage("Name, Mobile No, and Role are required fields.");
      return;
    }

    if (editUser) {
      onEditUser(editUser);
      setEditUser(null);
      setIsEditing(false);
    }
  };

  const renderActions = () => {
    if (!isEditing) return null;

    return (
      <EditUserForm>
        <h3>Edit User</h3>
        <input
          type="text"
          placeholder="Name"
          value={editUser?.name || ""}
          onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
        />
        <ValidMobileNumberInput
          value={editUser?.mobileNo || ""}
          onChange={(mobileNo) => setEditUser({ ...editUser, mobileNo })}
        />
        <select
          value={editUser?.role || "Select Role"}
          onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
        >
          <option value="Select Role">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Viewer">Viewer</option>
        </select>
        <select
          value={editUser?.status || "Active"}
          onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleUpdateUser}>Update User</button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </EditUserForm>
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
        {userType !== "Viewer" && <AddButton onAddUser={onAddUser} />}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Role</th>
              <th>Status</th>
              {userType !== "Viewer" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.mobileNo}</td>
                <td>{user.role}</td>
                <td>
                  <Status className={user.status.toLowerCase()}>
                    {user.status}
                  </Status>
                </td>
                {userType !== "Viewer" && (
                  <td>
                    <button
                      onClick={() => {
                        setEditUser(user);
                        setIsEditing(true);
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button onClick={() => onDeleteUser(user.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        {renderActions()}
      </UserManagementContainer>
    </>
  );
};

export default UserManagement;

import { useState } from "react";
import AddButton from "../Functionalities/AddButton";
import Logout from "../Functionalities/LogoutButton";
import "../Styles/UserManagement.css";

const UserManagement = ({
  users = [],
  onAddUser,
  onEditUser,
  onDeleteUser,
}) => {
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateUser = () => {
    if (editUser) {
      onEditUser(editUser);
      setEditUser(null);
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddButton onAddUser={onAddUser} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
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
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => onDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editUser && (
        <div className="edit-user-form">
          <h3>Edit User</h3>
          <input
            type="text"
            placeholder="Name"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={editUser.mobileNo}
            onChange={(e) =>
              setEditUser({ ...editUser, mobileNo: e.target.value })
            }
          />
          <select
            value={editUser.role}
            onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
          >
            <option value="Select Role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Viewer">Viewer</option>
          </select>
          <select
            value={editUser.status}
            onChange={(e) =>
              setEditUser({ ...editUser, status: e.target.value })
            }
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button onClick={handleUpdateUser}>Update User</button>
        </div>
      )}
      <Logout />
    </div>
  );
};

export default UserManagement;

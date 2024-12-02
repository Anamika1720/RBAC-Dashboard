import { useState } from "react";

const AddButton = ({ onAddUser, isReadOnly }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    mobileNo: "",
    role: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(newUser);
    setNewUser({ name: "", mobileNo: "", role: "", status: "Active" }); // Reset form
  };

  return (
    <div>
      {!isReadOnly && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile No"
            value={newUser.mobileNo}
            onChange={handleChange}
            required
          />
          <select
            type="text"
            name="role"
            placeholder="Role"
            value={newUser.role}
            onChange={handleChange}
            required
          >
            <option value="Select Role">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>
          <select
            name="status"
            value={newUser.status}
            onChange={handleChange}
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit">Add User</button>
        </form>
      )}
    </div>
  );
};

export default AddButton;

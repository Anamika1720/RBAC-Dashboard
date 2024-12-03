import React, { useState } from "react";
import {
  ButtonContainer,
  FormContainer,
  FormRow,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "./AddButton.Styles";

const AddButton = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    mobileNo: "",
    role: "Select Role",
    status: "Active",
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.mobileNo || newUser.role === "Select Role") {
      alert("Please fill out all required fields.");
      return;
    }
    onAddUser(newUser);
    setNewUser({
      name: "",
      mobileNo: "",
      role: "Select Role",
      status: "Active",
    });
    setShowForm(false);
  };

  return (
    <>
      <StyledButton onClick={() => setShowForm(true)}>Add User</StyledButton>
      {showForm && (
        <FormContainer>
          <h3>Add New User</h3>
          <FormRow>
            <StyledInput
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <StyledInput
              type="text"
              placeholder="Mobile No"
              value={newUser.mobileNo}
              onChange={(e) =>
                setNewUser({ ...newUser, mobileNo: e.target.value })
              }
            />
            <StyledSelect
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="Select Role">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Viewer">Viewer</option>
            </StyledSelect>
            <StyledSelect
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </StyledSelect>
          </FormRow>
          <ButtonContainer>
            <StyledButton primary onClick={handleAddUser}>
              Submit
            </StyledButton>
            <StyledButton onClick={() => setShowForm(false)}>
              Cancel
            </StyledButton>
          </ButtonContainer>
        </FormContainer>
      )}
    </>
  );
};

export default AddButton;

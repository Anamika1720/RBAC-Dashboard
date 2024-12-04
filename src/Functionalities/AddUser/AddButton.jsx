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
  const [error, setError] = useState(""); // Error state

  const handleAddUser = () => {
    // Validation
    if (
      !newUser.name.trim() ||
      !newUser.mobileNo.trim() ||
      newUser.role === "Select Role" ||
      !["Active", "Inactive"].includes(newUser.status)
    ) {
      setError("Please fill out all required fields.");
      return;
    }

    // Pass the new user data to the parent component
    onAddUser(newUser);

    // Reset form
    setNewUser({
      name: "",
      mobileNo: "",
      role: "Select Role",
      status: "Active",
    });
    setError(""); // Clear any existing errors
    setShowForm(false); // Close the form
  };

  return (
    <>
      <StyledButton onClick={() => setShowForm(true)}>Add User</StyledButton>
      {showForm && (
        <FormContainer>
          <h3>Add New User</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Display error */}
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
              <option value="Editor">Editor</option>
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

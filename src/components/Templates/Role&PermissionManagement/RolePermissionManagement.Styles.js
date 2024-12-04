import styled from "styled-components";

export const RolePermissionContainer = styled.div`
  padding: 20px;
`;

export const AddRoleButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
`;

export const RoleForm = styled.div`
  margin-bottom: 20px;
`;

export const RoleSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  margin-right: 20px;
`;

export const Permissions = styled.div`
  margin-top: 10px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RoleTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledSelect = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

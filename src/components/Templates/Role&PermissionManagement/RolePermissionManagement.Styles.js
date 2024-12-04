import styled from "styled-components";

export const RolePermissionContainer = styled.div`
  padding: 20px;
`;

export const RoleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    vertical-align: middle; /* Align content centrally */
    word-break: break-word;
    text-align: center;
  }

  th {
    text-align: center;
    font-weight: bold;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledInput = styled.input`
  margin: 0;
  padding: 5px;
`;

export const ActionButton = styled.button`
  padding: 6px 10px;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  svg {
    margin-right: 5px;
  }
`;

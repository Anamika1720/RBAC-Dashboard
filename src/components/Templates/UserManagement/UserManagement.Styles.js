import styled from "styled-components";

export const UserManagementContainer = styled.div`
  padding: 20px;
`;

export const UserCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const UserCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 200px;
`;

export const Status = styled.span`
  background: none;
  padding: 0;
  border: none;
`;

export const EditUserForm = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
  }

  input,
  select {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #000;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

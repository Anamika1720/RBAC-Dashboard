import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext(null);
export const UserContextProvider = userContext.Provider;

const UsersContext = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [roles, setRoles] = useState(() => {
    const savedRoles = localStorage.getItem("roles");
    return savedRoles ? JSON.parse(savedRoles) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  const handleAddUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContextProvider
      value={{
        users,
        onAddUser: handleAddUser,
        onEditUser: handleEditUser,
        onDeleteUser: handleDeleteUser,
        onSetRoles: setRoles,
        roles,
      }}
    >
      {children}
    </UserContextProvider>
  );
};

export default UsersContext;

export const useUserContext = () => {
  return useContext(userContext);
};

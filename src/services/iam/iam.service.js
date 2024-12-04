import Cookies from "js-cookie";

export const getCurrentUserPermission = () => {
  const userType = Cookies.get("type").toLowerCase();
  const roles = JSON.parse(localStorage.getItem("roles")) || [];

  if (roles.length === "" || !userType) {
    return false;
  }

  const currentUserRole = roles.find(
    (perm) => perm.roleName.toLowerCase() === userType
  );

  if (!currentUserRole || !currentUserRole.permissions) {
    return false;
  }

  const result = Object.fromEntries(
    currentUserRole.permissions.map((key) => [key, true])
  ); // You can replace `null` with any default value
  return result;
};

export const hasPermission = (permission) => {
  const userType = Cookies.get("type").toLowerCase();
  const roles = JSON.parse(localStorage.getItem("roles")) || [];

  if (roles.length === "" || !userType) {
    return false;
  }

  const currentUserRole = roles.find(
    (perm) => perm.roleName.toLowerCase() === userType
  );

  if (!currentUserRole || !currentUserRole.permissions) {
    return false;
  }

  const result = currentUserRole.permissions.includes(permission);

  return result;
};

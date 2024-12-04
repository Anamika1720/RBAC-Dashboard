export const roles = [
  { id: 1, roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, roleName: "Editor", permissions: ["Read", "Write"] },
  { id: 3, roleName: "Viewer", permissions: ["Read"] },
];

export const initRoles = () => {
  const existingRoles = localStorage.getItem("roles");
  if (existingRoles) return;

  localStorage.setItem("roles", JSON.stringify(roles));
};

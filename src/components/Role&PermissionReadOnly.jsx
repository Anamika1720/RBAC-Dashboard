import Logout from "../Functionalities/LogoutButton";

const RolePermissionManagementReadOnly = ({ roles }) => {
  return (
    <div>
      <h2>Role and Permission Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.roleName}</td>
              <td>{role.permissions}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Logout />
    </div>
  );
};

export default RolePermissionManagementReadOnly;

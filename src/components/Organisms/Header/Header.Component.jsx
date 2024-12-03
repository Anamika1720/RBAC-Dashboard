import Cookies from "js-cookie";
import { HeaderWrapper, Logo, Nav, NavItem, NavLink } from "./Header.Styles";
import Logout from "../../../Functionalities/Logout/LogoutButton";

const Header = () => {
  const userType = Cookies.get("type");

  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <Nav>
        <NavItem>
          Welcome, <strong>{userType}</strong>
        </NavItem>
        <NavItem>
          <NavLink to="/user-management" activeclassname="active">
            User Management
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/role-permission-management" activeclassname="active">
            Roles Management
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

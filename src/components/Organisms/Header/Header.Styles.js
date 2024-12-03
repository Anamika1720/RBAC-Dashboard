import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

// Container for the header
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  list-style-type: none;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  text-transform: capitalize;
  margin: 0 10px;
  font-size: 16px;
  color: #555; // Default color for inactive links
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #000; // Color change on hover
    }
  }

  &.active a {
    color: red; // Active link color (red)
  }
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: black; // Default color for links (inactive state)
  transition: color 0.3s;

  &:hover {
    color: #000; // Color change on hover
  }

  &.active {
    color: red; // Active link color (red)
  }
`;

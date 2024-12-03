import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Header from "../../components/Organisms/Header/Header.Component";
import {
  Card,
  CardButton,
  CardContainer,
  CardTitle,
  Page,
  Title,
} from "./Homepage.Style";

const Homepage = () => {
  const loggedIn = Cookies.get("type");

  return (
    <>
      <Header />
      <Page>
        <Title>{loggedIn} Page</Title>
        <CardContainer>
          <Card>
            <CardTitle>My Users</CardTitle>
            <Link to="/user-management">
              <CardButton>Manage</CardButton>
            </Link>
          </Card>
          <Card>
            <CardTitle>Roles & Permissions</CardTitle>
            <Link to="/role-permission-management">
              <CardButton>Manage</CardButton>
            </Link>
          </Card>
        </CardContainer>
      </Page>
    </>
  );
};

export default Homepage;

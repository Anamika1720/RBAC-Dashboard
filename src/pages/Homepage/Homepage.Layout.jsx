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
import { Settings } from "@mui/icons-material";

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
              <CardButton>
                Manage
                <Settings />
              </CardButton>
            </Link>
          </Card>
          <Card>
            <CardTitle>Roles & Permissions</CardTitle>
            <Link to="/role-permission-management">
              <CardButton>
                Manage
                <Settings />
              </CardButton>
            </Link>
          </Card>
        </CardContainer>
      </Page>
    </>
  );
};

export default Homepage;

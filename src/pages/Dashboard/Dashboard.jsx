import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Card,
  CardContainer,
  CardTitle,
  DashboardContainer,
  DashboardTitle,
  LoginButton,
} from "./Dashboard.Styles";

const Dashboard = () => {
  const navigate = useNavigate();

  const onLogin = (type) => {
    Cookies.set("type", type);
    navigate("/home");
  };

  return (
    <DashboardContainer>
      <DashboardTitle>RBAC Dashboard</DashboardTitle>
      <CardContainer>
        <Card>
          <CardTitle>Admin</CardTitle>
          <LoginButton onClick={() => onLogin("Admin")}>
            Login as Admin
          </LoginButton>
        </Card>
        <Card>
          <CardTitle>Editor</CardTitle>
          <LoginButton onClick={() => onLogin("Editor")}>
            Login as Editor
          </LoginButton>
        </Card>
        <Card>
          <CardTitle>Viewer</CardTitle>
          <LoginButton onClick={() => onLogin("Viewer")}>
            Login as Viewer
          </LoginButton>
        </Card>
      </CardContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

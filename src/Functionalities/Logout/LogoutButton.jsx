import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LogoutBtn } from "./Logout.Styles";

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    Cookies.remove("type");
    navigate("/");
  };

  return (
    <div>
      <LogoutBtn className="logout" onClick={handleClick}>
        Logout
      </LogoutBtn>
    </div>
  );
};

export default Logout;

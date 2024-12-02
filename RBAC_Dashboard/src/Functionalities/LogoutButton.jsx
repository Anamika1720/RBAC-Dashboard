import { useNavigate } from "react-router-dom";
import "../Styles/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UsersContext from "./Contexts/Users.Context.jsx";
import { initSeeding } from "./utils/seeding/index.seeding.js";

// Load initial data
initSeeding();

createRoot(document.getElementById("root")).render(
  <UsersContext>
    <App />
  </UsersContext>
);

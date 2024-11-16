import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContext from "./context/AuthContext.jsx";
import TaskContext from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* it is wraped in AuthContext to provide the context to the whole app */}
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>
);

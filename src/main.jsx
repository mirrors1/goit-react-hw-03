import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Імпорт стилів нормалізації
import "modern-normalize";
import "./index.css";
import App from "./component/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

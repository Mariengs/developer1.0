// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css"; // <— global, én gang her

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

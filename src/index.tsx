import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";

const docRoot = document.getElementById("root");

if (docRoot) {
  ReactDOM.createRoot(docRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

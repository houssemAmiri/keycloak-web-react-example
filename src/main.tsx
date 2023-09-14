import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import KeycloakProvider from "./context/keycloakProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KeycloakProvider clientId="" realm="" url="">
      <App />
    </KeycloakProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AlbomContextProvider from "./services/content/AlbomsContext.jsx";
import CurrentUserProvider, { CurrentUser } from "./services/CurrentUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <AlbomContextProvider>
        <App />
      </AlbomContextProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);

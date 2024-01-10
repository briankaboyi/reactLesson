import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContextProvider from "./context/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseContextProvider>
        <App />
      </UseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

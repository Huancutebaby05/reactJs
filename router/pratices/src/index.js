import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Router1 from "./components/router1/Main1"
import Router2 from "./components/router2/Main2"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router2 />
    </BrowserRouter>
  </React.StrictMode>
);

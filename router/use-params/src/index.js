//File index.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import Invoices from "./components/invoices";
import SmartSearch from "./components/SmartSearch";
import CustomLink from "./components/CustomLink";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CustomLink />}>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Hello, let's Invoices or Expenses to continue</p>
            </main>
          }
        />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// root.render(
//   <SmartSearch />
// )
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import Root, { loader as rootLoader } from "./Routes/root"
import ErrorPage from "./Routes/error-page";
import Contact1 from "./Routes/contact1";
import Contact2 from "./Routes/contact2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/contacts/:contactId",
        element:<Contact1 />
      },
      {
        path: "/contacts/:contactId",
        element:<Contact2 />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

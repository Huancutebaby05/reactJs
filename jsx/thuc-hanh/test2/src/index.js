import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// tạo element theo React.element
const element = React.createElement(
  "div",
  { id: "truong" },
  React.createElement(     // ta có thể lồng nhiều React.element với nhau
    "h2", 
    { className: "greeting" },
   "Hello, Truong!")
);

function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const user = {
  firstName: "Harper",
  lastName: "Perez",
};

//tạo element theo JSX
const name =<div className="hihi"> <h1>Hello, {formatName(user)}!</h1></div>
const greeting = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(name);

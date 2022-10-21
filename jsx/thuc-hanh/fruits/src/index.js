import React from "react";
import ReactDOM from "react-dom/client";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry",
];
let element = (
  <div>
    <p>Fruits of list</p>
    <ul>
      {fruits.map((item) => (
      <li>{ item }</li>
      ))}
    </ul>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Car from "./components/Car";
// this is functions component


// this is class component
// class Car extends React.Component {
//   render() {
//     return ( <div>
//       <h2>I am a {this.props.color} {this.props.size} Car!</h2>
//       <h2>User name: {this.props.user.name}</h2>
//       <h2>User age: {this.props.user.age}</h2>
//     </div>)
//   }
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car size="small" color="red" user={{name:"truong", age:18}} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

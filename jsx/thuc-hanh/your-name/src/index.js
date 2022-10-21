import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Nguyen Van Truong"

// sử dụng JSX
let element = (
  <h1 style={{ textAlign: "center", color:"blue" }}>
	{ name }
  </h1>
)

//Sử dụng react.createElement 
// let element = React.createElement("h1",{style:{color:"red",textAlign:"center"}}, name)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)


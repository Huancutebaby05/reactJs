import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }
  randomColor = (a,b,c) => {
    a = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    c = Math.floor(Math.random() * 255);
    let newColor = `rgb(${a},${b},${c})`;
    return newColor
  }
 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: this.randomColor() });
    }, 3000);
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.color,
            width: 500,
            height: 500,
            margin: "auto",
          }}
        />
      </div>
    );
  }
}

export default App;

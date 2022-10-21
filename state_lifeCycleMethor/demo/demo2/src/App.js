import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

class Football extends React.Component {
  shoot(a) {
    alert(a);
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }

  // render() {
  //   return <button onClick={() => this.shoot("Goal")}>Take the shot!</button>;
  // }
}

export { Toggle, Football };

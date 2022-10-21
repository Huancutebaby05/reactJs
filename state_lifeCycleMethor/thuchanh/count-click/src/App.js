import logo from "./logo.svg";
import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  setCountUp = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  setCountDown = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  }
  render(){
    return(
      <div>
        <button onClick={this.setCountUp}>Decrease</button>
        <span>{this.state.count}</span>
        <button onClick={this.setCountDown}>Increase</button>
      </div>
    )
  }
}

export default App;

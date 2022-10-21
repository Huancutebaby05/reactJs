import logo from "./logo.svg";
import "./App.css";
import Text from "./components/Text";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      mode: "collapse",
    };
  }

  expandMode = () => {
    this.setState({ mode: "expand", text: { Text } });
  };
  collapseMode = () => {
    this.setState({ mode: "collapse" });
  };
  render() {
    if (this.state.mode === "collapse") {
      return (
        <div>
          <button onClick={this.expandMode}>Expand</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.collapseMode}>Collapse</button>
          <Text/>
        </div>
      );
    }
  }
}

export default App;

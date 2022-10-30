import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      list: [],
    };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleAddItem = (event) => {
    if(this.state.name!==""){
    this.setState({ list: [...this.state.list, this.state.name], name: "" });
    console.log(this.state.list);
    }
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleAddItem}>Add</button>
        <div>
          {this.state.list.map((e, index) => (
            <div key={index}>
              {index + 1}.{e}
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

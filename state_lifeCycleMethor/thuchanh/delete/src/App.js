import React, { Component } from 'react';
import Hello from "./components/hello.jsx";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 5
    };
  }
 
  delete = () => {
    this.setState({ display: this.state.display -1 });
  };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <Hello />;
      return (
        <div style={{ textAlign: 'center' }}>
          {comp}
         
          <button onClick={this.delete}>
            Delete the component
          </button>
        </div>
      );
    }
    else{
      return (
        <div style={{ textAlign: 'center' }}>
         <p>Component is deleted!!</p>
        </div>
      );
    }
   
  }
}
 
export default App;
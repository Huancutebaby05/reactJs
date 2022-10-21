import React from "react";

// class App extends React.Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          header: "Header from state...REALLY",
//          content: "Content from state..."
//       }
//    }
//    render() {
//       return (
//          <div>
//             <h1>{this.state.header}</h1>
//             <h2>{this.state.content}</h2>
//          </div>
//       );
//    }
// }
// export default App;

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: true,
      year: 1964,
      count: 1
    };
  }
  changeColor = () => {
    this.setState({ color: "blue"});
  };
  // incrementCount=()=> {
  //   // Ghi chú: điều này sẽ *không* hoạt động như dự định.
  //   this.setState({count: this.state.count + 1});
  // }
  incrementCount=()=> {
    this.setState((state) => {
      // Quan trọng: đọc `state` thay vì` this.state` khi cập nhật.
      return ({count: state.count + 1})
    });
  }
  handleSomething = ()=> {
    // Giả sử `this.state.count` được khởi tạo là 0.
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}&nbsp;
          {this.state.model}&nbsp;from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <p>Count {this.state.count}</p>
        <button type="button" onClick={this.handleSomething}>
          Change count
        </button>
      </div>
    );
  }
}
export default Car;

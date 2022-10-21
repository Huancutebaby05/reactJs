import React from "react";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: "",
      secondNum: "",
      result: "",
    };
  }
  handleFirstNumber = (e) => {
    this.setState({ firstNum: +e.currentTarget.value });
  };
  handleSecondNumber = (e) => {
    this.setState({ secondNum: +e.currentTarget.value });
  };
  handleOperation = (e) => {
    switch (e.currentTarget.textContent) {
      case "+":
        this.setState((number) => ({
          result: (number.firstNum + number.secondNum).toFixed(2),
        }));
        break;
      case "-":
        this.setState((number) => ({
          result: (number.firstNum - number.secondNum).toFixed(2),
        }));
        break;
      case "*":
        this.setState((number) => ({
          result: (number.firstNum * number.secondNum).toFixed(2),
        }));
        break;
      case "/":
        this.setState((number) => ({
          result: (number.firstNum / number.secondNum).toFixed(2),
        }));
        break;
      default:
        this.setState({
          firstNum: "",
          secondNum: "",
          result: "",
        });
    }
  };
  render() {
    return (
      <div className="wrap">
        <input
          type="number"
          onChange={this.handleFirstNumber}
          value={this.state.firstNum}
        />
        <input
          type="number"
          onChange={this.handleSecondNumber}
          value={this.state.secondNum}
        />
        <p className="">
          <span>Result: {this.state.result}</span>
        </p>
        <div>
          <button className="btn" onClick={this.handleOperation}>
            +
          </button>
          <button className="btn" onClick={this.handleOperation}>
            -
          </button>
          <button className="btn" onClick={this.handleOperation}>
            *
          </button>
          <button className="btn" onClick={this.handleOperation}>
            /
          </button>
          <button className="btn" onClick={this.handleOperation}>
            C
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React from "react";
import { useEffect, useState } from "react";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { color: "green" };
//   }

//   UNSAFE_componentWillMount() {
//     console.log("UNSAFE_componentWillMount da chay");
//   }

//   componentDidMount() {
//     console.log("componentDidMount da chay");
//   }
//   change = ()=>{
//     this.setState({color: "red"})
//   }
//   render() {
//     console.log("Ham render da duoc chay");

//     return (
//       <div>
//         <button onClick={this.change}>Submit</button>

//         <p>{this.state.color}</p>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {data: props.favcol };
  // }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}
class Content extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  componentWillUpdate(prevProps, prevState) {
    console.log("Component WILL UPDATE!");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default function App1() {
  const { count, setCount } = useState(0);

  useEffect(() => {
    console.log("trong useEffect");
    return () => {
      console.log("return render");
    };
  }, [count]);
  console.log("render");

  return count > 3 ? (
    <div>
      <p>count {count} lớn hơn 3</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      {/* <a
        href="https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR"
        // onClick={(e) => e.preventDefault("you clicked")}
      >
        Link
      </a> */}
    </div>
  ) : (
    <div>
      <p>count {count} nhỏ hơn 3</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
}

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(count1);
    return () => {
      console.log("===");
    };
  }, []);
  return () => {
    <div>
      <p>{count1}</p>
      <p>{count2}</p>
      <button onClick={() => setCount1(count1 +1)}>Count1</button>
      <button onClick={() => setCount2(count2 +1)}>Count2</button>
    </div>;
  };
}

export default App;

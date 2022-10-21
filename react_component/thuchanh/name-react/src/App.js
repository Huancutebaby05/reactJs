import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import HeaderFunction from "./components/ui/HeaderFC";
// import Header from "./components/Header";

function App() {
  // thu hien luu tru data
  const [address, setAddress] = useState([]);
  const [names, setNames] = useState();
  const url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";

  // de goi api
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setAddress(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getNames = (name) => {
    const data = address || [];
    const newNames = data
      .filter((address) =>
        address.name.trim().toLowerCase().includes(name.trim().toLowerCase())
      )
      .map((i) => i.name);
    const newName = newNames.join(", ");
    setNames(newName);
  };
  return (
    <div className="App">
      <HeaderFunction  name ={names}/>
      <input onChange={(e) => getNames(e.target.value)} />
      <div>{names}</div>
    </div>
  );
}

export default App;
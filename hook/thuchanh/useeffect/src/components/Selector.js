import { useState, useEffect } from "react";

export default function Selector() {
  let [selected, setSelected] = useState("");
  let [valueSelected, setValueSelected] = useState("");

  const choice = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    switch (selected) {
      case "":
        setValueSelected("");
        break;
      case "0":
        setValueSelected("javascrip");
        break;
      case "1":
        setValueSelected("Angular");
        break;
      case "2":
        setValueSelected("Java");
        break;
      case "3":
        setValueSelected("Php");
        break;
      default:
    }
  }, [selected]);
  return (
    <div>
      <p>
        Course:{" "}
        <select
          onChange={(e) => {
            choice(e);
          }}
        >
          <option value={""}></option>
          <option value={"0"}>javascrip</option>
          <option value={"1"}>Angular</option>
          <option value={"2"}>Java</option>
          <option value={"3"}>Php</option>
        </select>
        if (selected!==0) {<h2>Your selected is {valueSelected}</h2>}
      </p>
    </div>
  );
}

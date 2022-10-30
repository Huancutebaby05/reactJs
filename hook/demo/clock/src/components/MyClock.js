import useClock from "../hooks/useClock";
import React from "react";
import { v4 } from "uuid";
function MyClock() {
  //Gọi custom hook để sử dụng
  const [time, ampm, name, setName, list, setList] = useClock();
  return (
    <div id="Clock-style">
      {time}
      <span> {ampm}</span>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          setList([name, ...list]);
          setName("");
        }}
      >
        Add
      </button>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
export default MyClock;

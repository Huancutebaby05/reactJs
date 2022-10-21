import { component } from "react";
import useList from "../hooks/useList";

export default function List() {
  const [name, setName, list, setList] = useList();
  return (
    <div>
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

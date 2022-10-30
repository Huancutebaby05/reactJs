// import { useEffect } from "react";
// // import { v4 } from "uuid";

// export default function UseToDoList() {
//   const [name, setName] = useState("");
//   // const [isEdit, setIsEdit] = useState(false);
//   const [list, setList] = useState([]);

//   const handleChange=(e) => {
//     const newName = {...name,  [e.target.name]: e.target.value}
//     setName(newName);
//     // setName(e.target.value);
//   }
//   const handleClick=(e) => {
//     setList([name, ...list]);
//             setName("");
//   }
//   // const addName = (name) => {
//   //   setName([{ id: v4(), name: name }, ...list]);
//   // };
 
//   return [name, setName, list,handleChange, handleClick, setList];
// }
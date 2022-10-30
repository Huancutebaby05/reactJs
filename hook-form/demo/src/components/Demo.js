import React, { useState } from "react";

const MyForm = () => {
  const [username, setUsername] = useState("");
  const handleChange = (event) => setUsername(event.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`You submit your name is ${username}`);
  };
  let header;
  if (username) {
    header = <h1>Hello {username}</h1>;
  } else header = "";
  return (
    <form onSubmit={submitHandler}>
      <p>Enter your name and submit:</p>
      <input type="text" value={username} onChange={handleChange} />
      <input type="submit" />
      {header}
    </form>
  );
};

// function MyForm() {
//   const [state, setState] = useState({
//     username: "",
//     age: null,
//   });

//   const submitHandler = (event) => {
//     event.preventDefault();
//     alert("You are submitting " + state.username);
//   };
//   const handleChange = (event) =>
//     setState({ ...state, [event.target.name]: event.target.value });
//   return (
//     <form onSubmit={submitHandler}>
//       <h1>
//         Hello {state.username} {state.age}
//       </h1>
//       <p>Enter your name:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Enter your age:</p>
//       <input type="text" name="age" onChange={handleChange} />
//       <input type="submit" />
//     </form>
//   );
// }

export default MyForm;

import React, { useState } from "react";
export const MyConditionForm = () => {
  const [mode, setMode] = useState("edit");
  const [error,setError] = useState("")
  const [account, setAccount] = useState({
    username: "",
    age:null,
    password: "",
  });

  const handleChange = (e) => {
    setAccount({...account, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(account.age<0 || account.age>200){
        setError(alert("age must be between 0 and 200"))
    }
    console.log(error);
    setMode("view");
  };
  const changeMode = () => {
    setMode("edit");
  };
  if (mode === "view") {
    return (
      <div>
        <h1> Hello, you are in view mode</h1>
        <button onClick={changeMode}>Click to edit mode</button>
      </div>
    );
  } else if (mode === "edit") {
    return (
      <div>
        <h1>My form Edit mode</h1>
        <form onSubmit={handleSubmit}>
          <p>user name: {account.username}</p>
          <input name="username" type="text" onChange={handleChange} />
          <br/>
          <input name="age" type="number" min={19} onChange={handleChange} />
          <br/>
          <input name="password" type="password" onChange={handleChange} />
          <br/>
          <input type="submit" value="Click here to view mode"/>
        </form>
      </div>
    );
  }
};

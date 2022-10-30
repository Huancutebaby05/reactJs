import { useState } from "react";
import { Input } from "./Input";
import "bootstrap/dist/css/bootstrap.min.css"
export const SignUp = () => {
  const [account, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setState({ ...account, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("hihi");
  };
  return (
    <div className="container pt-3">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="userName"
          type="text"
          onChange={handleChange}
          placeholder="Enter user's name"
        />
        <br />
        <Input
          label="Email"
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Enter user's email"
        />
        <br />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <Input
          label="Confirm password"
          name="confirmPassword"
          type="text"
          onChange={handleChange}
          placeholder="Confirm password"
        />
        <br />
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

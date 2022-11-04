import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const SimpleForm = () => {
  const [account, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validateSchema = Yup.object().shape({
    userName: Yup.string().min(2).max(20).required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });
  const [isLogIn, setIsLogIn] = useState(false);

  function handleChange(event) {
    setState({ ...account, [event.target.name]: event.target.value });
  }
  const handleLogOut = () => {
    setIsLogIn(false);
    setState({ userName: "", email: "", password: "", confirmPassword: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      account.userName &&
      account.email &&
      account.password &&
      account.confirmPassword === account.password;
    if (isValid) {
      alert("Log in success");
      setIsLogIn(true);
    } else {
      alert(" Something went wrong");
    }
  };
  if (!isLogIn) {
    return (
      <div className="container">
        <Formik
          initialValues={account}
          validationSchema={validateSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <h1>Sign up</h1>
              <label htmlFor="userName">User name:</label>
              <br />
              <Field
                name="userName"
                placeholder="Enter your user name"
                value={account.userName}
                onChange={handleChange}
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="userName"
              ></ErrorMessage>
              <br />
              <label htmlFor="email"> Email</label>
              <br />
              <Field
                type="email"
                name="email"
                placeholder="Enter your user email"
                value={account.email}
                onChange={handleChange}
              ></Field>
              <ErrorMessage
                component="div"
                className="text-danger"
                name="email"
              ></ErrorMessage>
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                value={account.password}
                onChange={handleChange}
              ></Field>
              <ErrorMessage
                component="div"
                className="text-danger"
                name="password"
              ></ErrorMessage>
              <br />
              <label htmlFor="confirmPassword">Confirm password</label>
              <br />
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={account.confirmPassword}
                onChange={handleChange}
              ></Field>
              <ErrorMessage
                component="div"
                className="text-danger"
                name="confirmPassword"
              ></ErrorMessage>
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  } else {
    return (
      <div>
        <p>Welcome, you are signed</p>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    );
  }
};
export default SimpleForm;

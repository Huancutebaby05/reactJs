import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const validateSchema = Yup.object().shape({
    name: Yup.string().min(6).max(20).required(),
    email: Yup.string().email().required(),
    tel: Yup.string()
      .required()
      .matches(/((\+92)|0)[.\- ]?[0-9][.\- ]?[0-9][.\- ]?[0-9]/),
    message: Yup.string(),
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
      alert("Log in success")
      e.preventDefault();
      console.log("hihi");
  };
  return (
    <div>
      <Formik initialValues={form} validationSchema={validateSchema}  onSubmit={handleSubmit}>
        <Form >
          <label htmlFor="name">Your name</label>
          <Field name="name" placeholder="Enter your name" value={form.name} onChange ={handleChange}/>
          <br />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="name"
          ></ErrorMessage>
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="Enter your email" />
          <br />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="email"
          ></ErrorMessage>
          <label htmlFor="tel">Tel</label>
          <Field name="tel" placeholder="Enter your tel" />
          <br />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="tel"
          ></ErrorMessage>
          <label htmlFor="message">Message</label>
          <Field name="message" placeholder="Enter your message" />
          <br />
          <ErrorMessage
            component="div"
            className="text-danger"
            name="message"
          ></ErrorMessage>
          <Field type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
};

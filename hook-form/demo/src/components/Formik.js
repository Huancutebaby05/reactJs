import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Please enter an email"),
  message: Yup.string().min(2).required("Please enter a message"),
});
const MyFormikDemo = () => (
  <div className="container pt-3">
    <h1>Contact form</h1>
    <Formik
      initialValues={{ email: "", message: "" }}
      validationSchema={validateSchema}
      onSubmit={(value) => {
        console.log(value);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" />
          {errors.email && touched.email ? (
            <span className="text-danger">{errors.email}</span>
          ) : null}
          <br />
          <Field name="message" />
          {errors.email && touched.message ? (
            <span className="text-danger">{errors.message}</span>
          ) : null}
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default MyFormikDemo;

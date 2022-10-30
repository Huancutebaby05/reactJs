import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.string().min(1, "Too Young").max(120, "Too old"),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        age:null
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <span>{errors.firstName}</span>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <span>{errors.lastName}</span>
          ) : null}

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  yourName: Yup.string("gi dau")
    .min(6)
    .max(20)
    .required("Hayx nhap vao ten ban"),
  yourNumber: Yup.string().required("Nhap vao so dien thoai cua ban"),
  yourAddress: Yup.string().required("nhap vao dia chi cua ban"),
});
const Basic = () => (
  <div>
    <h1>Đăng kí thông tin</h1>
    <Formik
      initialValues={{
        yourName: "",
        yourNumber: "",
        yourAddress: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(e) => {
        console.log(e);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="yourName">Name</label>
          <Field name="yourName" type="text" placeholder="Nhập tên">
            {errors.yourName && touched.yourName ? (
              <span>{errors.yourName}</span>
            ) : null}
          </Field>
          <br />
          <label htmlFor="yourNumber">Phone number</label>
          <Field
            name="yourNumber"
            type="number"
            placeholder="Nhập số điện thoại"
          >
            {errors.yourNumber && touched.yourNumber ? (
              <span>{errors.yourNumber}</span>
            ) : null}
          </Field>
          <br />
          <label htmlFor="yourAddress">Address</label>
          <Field name="yourAddress" type="text" placeholder="Nhập địa chỉ">
            {errors.yourAddress && touched.yourAddress ? (
              <span>{errors.yourAddress}</span>
            ) : null}
          </Field>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Basic;

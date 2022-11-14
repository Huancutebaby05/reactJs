import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";

export const BookManager = () => {
  const validateSchema = Yup.object().shape({
    title: Yup.string().required(),
    author: Yup.string().required(),
    quantity: Yup.number().required(),
  });
  const [mode, setMode] = useState({
    status: "add",
    action: "Add",
  });
  const [book, setBook] = useState({
    title: "",
    author: "",
    quantity: "",
    action: "",
  });
  const [bookShelf, setBookShelf] = useState([
    { title: "Trăm năm cô đơn", author: "Gabriel Garcia Marquez", quantity: 3 },
    { title: "Vị Thần Của Những Quyết Định", author: "UNIVERSE", quantity: 1 },
    { title: "Đắc nhân tâm", author: "Dale Carnegie", quantity: 5 },
  ]);
  // localStorage.getItem("string", JSON.stringify([...bookShelf]))
  const handleSubmit = (value) => {
    if (mode.status === "add") {
      console.log("22");
      bookShelf.unshift(value);
      setBookShelf([...bookShelf]);
      setBook({
        title: "",
        author: "",
        quantity: "",
        action: "",
      });
    } else if(mode.status==="edit") {
      bookShelf[mode.selectedIndex]=value
      console.log(value);
      setBookShelf([...bookShelf])
      setMode({status:"add",action:"Add"})
      setBook({
        title: "",
        author: "",
        quantity: "",
        action: "",
      });
    }
  };
  localStorage.setItem("string", JSON.stringify([...bookShelf]))
  
  const handleOnchange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleEdit = (index) => {
    setMode({status: 'edit', action:'Save', selectedIndex:index})
    setBook({...bookShelf[index]})
  };
  const handleDelete = (indexDel) => {
    setBookShelf(bookShelf.filter((item, key) => key !== indexDel));
  };
  return (
    <div className="container mt-3">
      <Formik
        initialValues={book}
        validationSchema={validateSchema}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field
            value={book.title}
            name="title"
            placeholder="Enter titlte's book"
            onChange={handleOnchange}
          ></Field>
          <ErrorMessage component="span" name="title"></ErrorMessage>
          <br />

          <label htmlFor="author">Author</label>
          <Field
            value={book.author}
            name="author"
            placeholder="Enter author's book"
            onChange={handleOnchange}
          ></Field>
          <ErrorMessage component="span" name="title"></ErrorMessage>
          <br />

          <label htmlFor="quantity">Quantity</label>
          <Field
            value={book.quantity}
            name="quantity"
            placeholder="Enter quantity's book"
            onChange={handleOnchange}
          ></Field>
          <ErrorMessage component="span" name="quantity"></ErrorMessage>
          <br />
          <Field type="submit" value={mode.action} className="mt-2" />
        </Form>
      </Formik>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookShelf.map((value, index) => (
              <tr key={index}>
                <td>{value.title}</td>
                <td>{value.author}</td>
                <td>{value.quantity}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

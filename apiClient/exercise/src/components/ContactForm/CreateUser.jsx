import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import "bootstrap/dist/css/bootstrap.min.css"
import * as Yup from "yup"
import { useNavigate, useLocation } from "react-router-dom";

function CreateUser() {
    const [form, setForm] = useState({
        img: "",
        name: "",
        email: "",
        phone: "",
    })
    const formSchema = Yup.object().shape({
        img:"",
        name: Yup.string().required(),
        phone: Yup.string().required(),
        email: Yup.string().email().required()
    })
    const getImgUrl = (e) => {
        const fd = new FormData();
        // Tạo data để gửi lên server
        fd.append("file", e.target.files[0]);
        axios
            .post("https://v2.convertapi.com/upload", fd)
            .then(res => {
                setForm({ ...form, img: res.data })
                console.log(form.img);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const navigate = useNavigate()
    const { state: { id, action, status } } = useLocation()
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = (value) => {
        if (status === "edit") {
            axios.put(`http://localhost:3001/contact/${id}`, value).then((res) => {
                alert("Update successful!")
                navigate("/")
            }).catch((err) => console.log(err))
        } else {
            axios.post("http://localhost:3001/contact/", value)
                .then((res) => {
                    // console.log(res.data);
                    setForm({
                        img:"",
                        name: "",
                        email: "",
                        phone: "",
                    })
                }).catch((err) => console.log(err))
        }
    }
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/contact/${id}`).then((e) => {
                setForm(e.data)
            }).catch((e) => console.log(e))
        }
    }, [])

    return (
        <div className='container  mt-3'>
            <h1>{status === "edit" ? "Edit user" : "Add user"}</h1>
            <Formik initialValues={form}
                enableReinitialize={true}
                onSubmit={handleClick}
                validationSchema={formSchema}>
                <Form>
                    {form.img.Url ? <div ><img src={form.img.Url} alt="" className=' create-img'/></div> : ""}

                    <label htmlFor="img">File:</label>
                    <br />
                    <Field name="img" type="file" value="" onChange={getImgUrl} />
                    <br />
                    <label htmlFor="name">Name:</label>
                    <br />
                    <Field name="name" value={form.name} onChange={handleChange} />
                    <ErrorMessage className='text-danger' component="span" name='name'></ErrorMessage>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <Field name="email" value={form.email} onChange={handleChange} />
                    <ErrorMessage className='text-danger' component="span" name='email'></ErrorMessage>
                    <br />
                    <label htmlFor="phone">Phone:</label>
                    <br />
                    <Field name="phone" value={form.phone} onChange={handleChange} />
                    <ErrorMessage className='text-danger' component="span" name='phone'></ErrorMessage>
                    <br />
                    <Field type="submit" className="btn btn-success mt-3" value={action} />
                    <br />
                    <Field type="button" className="btn btn-success mt-1" onClick={() => navigate(-1)} value="Back" />
                </Form>
            </Formik>
        </div>
    )
}

export default CreateUser
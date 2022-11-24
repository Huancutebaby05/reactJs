import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function UserAdd() {
    const [form, setForm] = useState({
        name: "",
        birthday: "",

    })
    const navigate = useNavigate()
    const handleClick = (value) => {
        console.log(value);
        axios.post("http://localhost:3001/exercise1/", value )
            .then((res) => {
                console.log(res.data);
                setForm({
                    name: "",
                    birthday: "",
            
                })

            }).catch((err) => console.log(err))
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-3'>
            <Formik initialValues={form}
            enableReinitialize={true}
            onSubmit={handleClick}>
            <Form>
                
                <label htmlFor='name'>Name</label>
                <br />
                <Field id="name" name="name" value={form.name} onChange={handleChange} />
                <br />

                <label htmlFor='birthday'>Date of birthday</label>
                <br />
                <Field id="birthday" name="birthday" type="date" value={form.birthday} onChange={handleChange} />
                <br />
                <Field type="submit" className="btn btn-success mt-3" value="Add new employee" />
                <br/>
                <Field type="button" className="btn btn-success mt-1" onClick={()=>navigate(-1)} value="Back"/>
            </Form>
        </Formik></div>
    )
}

export default UserAdd
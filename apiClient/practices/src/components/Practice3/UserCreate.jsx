import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field,  } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";


function UserCreate() {
    const navigate = useNavigate()
    const [data, setData] = useState({
      name: '',
      birthday: ''
    })
    const handleClick = (value) => {
      axios.post(`http://localhost:3001/exercise1/`, value)
      .then((res) =>{
        setData({
            name: "",
            birthday: "",
    
        })
      }).catch((err) => console.log(err))
    }
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
      <div className='container pt-3'>
        <Formik initialValues={data}
          enableReinitialize={true}
          onSubmit={handleClick}>
          <Form>
  
            <label htmlFor='name'>Name</label>
            <br />
            <Field id="name" name="name" value={data.name} onChange={handleChange} />
            <br />
  
            <label htmlFor='birthday'>Date of birthday</label>
            <br />
            <Field id="birthday" name="birthday" type="date" value={data.birthday} onChange={handleChange} />
            <br />
            <Field type="submit" className="btn btn-success mt-3" value="Add user" />
            <br />
            <Field type="button" className="btn btn-success mt-1" onClick={() => navigate(-1)} value="Back" />
          </Form>
        </Formik>
  
      </div>
    )
  }
  
  export default UserCreate
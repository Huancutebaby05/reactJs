import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from "axios";


function UserEdit() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    birthday: ''
  })
  useEffect(() => {
    axios.get(`http://localhost:3001/exercise1/${state.id}`).then((res) => {
      setData(res.data)
    }).catch((err) => console.log(err))
  }, [])
  const handleClick = (value) => {
    axios.put(`http://localhost:3001/exercise1/${data.id}`, value)
    .then((res) =>{
      navigate("/")
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
          <Field type="submit" className="btn btn-success mt-3" value="Update user" />
          <br />
          <Field type="button" className="btn btn-success mt-1" onClick={() => navigate(-1)} value="Back" />
        </Form>
      </Formik>

    </div>
  )
}

export default UserEdit
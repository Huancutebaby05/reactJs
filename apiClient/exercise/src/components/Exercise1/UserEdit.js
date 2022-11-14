import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
function UserEdit() {
  const { state } = useLocation()
  const [form, setForm] = useState({
    name:"",
    birthday: ""
  })
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/exercise1/${state.id}`).then((e) =>{
      console.log(e)
      setForm(e.data)
    }
    ).catch((e) => console.log(e))
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleClick = (value) => {
    axios.put(`http://localhost:3001/exercise1/${form.id}`,value).then((res) => {
      console.log(value)
      navigate("/user")
    }).catch((err)=>console.log(err))
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
          <Field type="submit" className="btn btn-success mt-3" value="Update employee" />
          <br/>
          <Field type="button" className="btn btn-success mt-1" onClick={()=>navigate(-1)} value="Back"/>
        </Form>
      </Formik></div>
  )
}

export default UserEdit
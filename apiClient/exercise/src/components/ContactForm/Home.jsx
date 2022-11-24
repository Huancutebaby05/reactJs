import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import "bootstrap/dist/css/bootstrap.min.css"
import * as yup from "yup"
import { useNavigate, useLocation } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

const Home = () => {
    const navigate = useNavigate()
    const [list, setList] = useState([])


    const handleCreate = (e) => {
        navigate("/Create", { state: { action: "Add user", status: "add" } })
    }
    const handleEdit = (editId) => {
        navigate("/Edit", { state: { id:editId, action: "Save", status: "edit" } })
        
    }
    const handleDelete = (delIndex, value) => {
        console.log(delIndex);
        confirmAlert({
            title: <p>Are you sure you want to delete <span className=' text-danger text-capitalize'>{value}</span> ?</p>,
            buttons: [
                { label: "Cancel" },
                {
                    label: "Delete",
                    onClick: () => {
                        axios.delete(`http://localhost:3001/contact/` + delIndex).then(res => {
                            let newList = list.filter(value => value.id !== delIndex)
                            setList([...newList])
                        }).catch(err => console.log(err))

                    }
                }
            ]
        })

    }
    
    useEffect(() => {
        axios.get(`http://localhost:3001/contact`).then((res) => {
            console.log(res.data);
            setList(res.data)
        }).catch((err) => console.error(err))
    }, [])
    return (
        <div className='container mt-4'>
            <h2>User list</h2>
            <div>
                <button className='btn btn-success' onClick={handleCreate}>Create a new user</button>
            </div>
            <table className='table table-striped capitalize'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, index) => (
                        <tr className='pb-2' key={index} >
                            <td> {value.id}</td>
                            <td className='text-capitalize'> 
                            <img src={value.img.Url} className="create-img-small" alt="" />
                            {(value.name)}</td>
                            <td >{value.email}</td>
                            <td >0{value.phone}</td>
                            <td>
                                <button onClick={() => handleEdit(value.id)} className='btn btn-warning mx-2'>Edit</button>
                                <button onClick={() => handleDelete(value.id)} className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Home
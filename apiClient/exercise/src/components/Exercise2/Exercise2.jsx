import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

function Exercise2() {
    const [list, setList] = useState([])
    const [form, setForm] = useState({
        UserId: '',
        title: '',
        completed: false
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        axios.post(`http://localhost:3001/todo`, form).
            then((res) => {
            }).catch((err) => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://localhost:3001/todo`).then((res) => {
            setList(res.data)
            console.log(res.data);
        }).catch((err) => console.log(err))
    },[form.title])
    return (
        <div className='container pt-3'>
            <div>
                <input type="text" name='title' value={form.title} onChange={handleChange} />
                <input type="submit" onClick={handleClick} value="Add" />
            </div>
            <div>
                <ul>
                    {list.map((value) => (
                        <li key={value.id}>{value.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Exercise2
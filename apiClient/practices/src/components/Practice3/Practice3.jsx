import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


function Practice3() {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate("/UserCreate")
    }
    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:3001/exercise1").then((res) => {
                setData(res.data)
                setLoad(false)
            }).catch((err) => console.log(err))
        }, 3000);
    }, [])
    if (load) {
        return (
            <div className='container pt-3'>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className='container mt-3'>
                {data.map((value, index) => (
                    <ul key={value.id}>
                        <li><a href="" className='text-decoration-none text-black' onClick={() => navigate("./UserDetail", { state: data[index] })}>{value.name}</a></li>
                    </ul>
                ))}
                <button onClick={handleCreate}>Create</button>
            </div>

        )
    }
}

export default Practice3
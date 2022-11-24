import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState, useEffect } from "react"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
export const User = () => {
    const [personList, setPersonList] = useState([
        
    ])
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate("/user/add")
    }
    const handleEdit = (editId) => {
        navigate("/user/edit", {state:{id:editId}})
    }
    const handleDelete = (delIndex,value) => {
        console.log(delIndex);
        confirmAlert({
            title: <p>Are you sure you want to delete <span className=' text-danger text-capitalize'>{value}</span> ?</p>,
            buttons: [
                { label: "Cancel" },
                {
                    label: "Delete",
                    onClick: () => {
                        axios.delete(`http://localhost:3001/exercise1/` + delIndex).then(res => {
                            let newList = personList.filter(value => value.id !== delIndex)
                            setPersonList([...newList])
                        }).catch(err =>console.log(err))

                    }
                }
            ]
        })

    }
    useEffect(() => {
        // get data
        axios.get(
            `http://localhost:3001/exercise1`
        ).then((res) => {
            console.log(res.data);
            setPersonList(res.data)
        }).catch((err) => console.log(err))
    }, [])
    return (
        <div className='container pt-4'>
            <div>
                <h2>
                    Company list:
                </h2>
                <button onClick={handleCreate} className="btn btn-primary">
Create new employee
                </button>
            </div>
            <table className='table table-striped capitalize'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Birthday</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {personList.map((value, index) => (
                        <tr key={index} >
                            <td> {value.id}</td>
                            <td className='text-capitalize'> {(value.name)}</td>
                            <td className='text-capitalize'>{value.birthday}</td>
                            <td>
                                <button onClick={() => handleEdit(value.id)} className='btn btn-warning mx-2'>Edit</button>
                                <button onClick={() => handleDelete(value.id,value.name)} className='btn btn-danger mx-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}

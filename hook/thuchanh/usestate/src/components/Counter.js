import React from 'react';
import {useState}  from "react"

export default function Count(){
    let [count,setCount]=useState(0)

    const handleClick = () =>{
        const newValue = count +1
        setCount(newValue)
    }
    return(
        <div>
            <p>Current value is {count}</p>
            <button onClick={handleClick}>Click here
            </button>
        </div>
    )
}
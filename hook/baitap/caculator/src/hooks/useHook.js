import React from 'react';
import {useState} from 'react'
export default function useHook(){
    const [number,setNumber] = useState("")
    const [result,setResult] = useState("0")
    const [operator,setOperator] = useState("")
    return [number,setNumber,result,setResult,operator,setOperator]
}
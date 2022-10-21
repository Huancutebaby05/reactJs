import {useState, useEffect} from "react"

export default function useList(){
    const [name, setName]= useState("");
    const [list, setList]= useState([]);


    return [name,setName,list,setList]
}
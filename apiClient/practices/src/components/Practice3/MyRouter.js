import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Practice3 from "./Practice3";
import UserEdit from "./UserEdit"
import UserCreate from "./UserCreate";


function MyRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Practice3/>}/>
        <Route path='/UserDetail' element={<UserEdit/>}/>
        <Route path='/UserCreate' element={<UserCreate/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MyRouter
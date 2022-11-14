import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserAdd from "./UserAdd"
import {User} from "./User"
import UserEdit from './UserEdit'
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/user' element={<User />}></Route>
                <Route path='/user/add' element={<UserAdd />}></Route>
                <Route path='/user/edit' element={<UserEdit />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter
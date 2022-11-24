import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateUser from "./CreateUser";

function ContactRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Create' element={<CreateUser />} />
                    <Route path='/Edit' element={<CreateUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ContactRouter
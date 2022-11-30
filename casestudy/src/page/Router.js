import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import Main from "./Main";
import Login from "./Login";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Infor, Infor1, Infor2 } from "./Home";

export default function Routing() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Infor />}>
          <Route path="/information/infor1" element={<Infor1/>}/>
          <Route path="/information/infor2" element={<Infor2/>}/>
        </Route>
      </Routes>
    </div>
  );
}

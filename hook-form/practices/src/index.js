import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleForm from "./components/SimpleForm"
import {Demo} from "./components/Demo"
import {SignUp} from "./components/demoForm/SignUp.js";
import {ValidateFormLogin} from "./components/ValidateFormLogin";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SignUp />
);


import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import {MyConditionForm} from './components/ConditionForm';
import MyForm from './components/Demo';
import MyFormikDemo from './components/Formik';
import {FileUploadPage, App} from './components/Form-element';
import {ValidationSchemaExample} from "./components/TestFormik"
import Basic from './components/FirstFormik';
import "./App.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFormikDemo />);
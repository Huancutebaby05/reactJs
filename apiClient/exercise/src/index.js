import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyRouter from './components/Exercise1/MyRouter';
import Exercise2 from "./components/Exercise2/Exercise2";
import ContactRouter from "./components/ContactForm/ContactRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContactRouter />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

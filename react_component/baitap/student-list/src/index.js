import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentsList from './components/StudentInfoComponent';
let students=[
  {
    ID:1,
    Name:"truong",
    Age:25,
    Add:"Ha noi"
  },
  {
    ID:2,
    Name:"Hoa",
    Age:30,
    Add:"Ha tinh"
  },
  {
    ID:3,
    Name:"Hong",
    Age:23,
    Add:"Ha nam"
  },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <StudentsList student= {students}/>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

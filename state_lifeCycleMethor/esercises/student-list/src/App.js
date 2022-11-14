import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from "./components/Form"

class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       list: [],
//       form: {
//         name: "",
//         phone: "",
//         email: ""
//       },
//       isValid: false,
//       indexSelected: -1
//     }
//   }
//   handleChange = (e) => {
//     this.setState((state) => {
//       const form = state.form
//       form[e.target.name] = e.target.value
//       return { form }
//     }, () => this.checkInvalidForm())
//   }
//   handleSelect = (studentSelect, index) => {
//     this.setState({
//       form: JSON.parse(JSON.stringify(studentSelect)),
//       indexSelected: index
//     })
//   }

//   checkInvalidForm = () => {
//     const {name, phone, email}= this.state.form
//     const value = name && phone && email
//     this.setState({isValid:value})
//   }
//   handleSubmit = () => {
//     if(this.state.isValid){
//       const newList = this.state.studentList
//       if(this.state.indexSelected >-1){
        
//       }
//     }
//   }
//   handleDelete = () => {

//   }
//   handleEdit = () => {

//   }

//   render() {
//     return (
//       <div>
//         <label >Name</label>
//         <br />
//         <input name='name' onChange={this.handleChange} value={this.state.name}></input>
//         <br />
//         <label >Phone</label>
//         <br />
//         <input name='phone' onChange={this.handleChange} value={this.state.phone}></input>
//         <br />
//         <label >Email</label>
//         <br />
//         <input type={'email'} onChange={this.handleChange} value={this.state.email}></input>
//       </div>
//     )
//   }


render(){
  return(
    <>
    <Form.Input />
    </>
  )
}
}

export default App;

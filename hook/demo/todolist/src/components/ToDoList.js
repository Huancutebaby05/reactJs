// import useToDoList from "../hooks/useToDoList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { v4 } from "uuid";

function ToDoList() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  
  const onSubmit = (e) =>{
    e.preventDefault()
    setList([name,...list])
    setName("")
  }
  // const addName = (name) => {
//   //   setName([{ id: v4(), name: name }, ...list]);
//   // };
  const onChange = (e) =>{
    // let newName = {[e.target.name]:e.target.value,...name}
    setName(e.target.value)
    // console.log(newName);
  }
  const handleDelete = (indexDel) => {
    let newList = list.filter((item,index)=> index !== indexDel)
    console.log(indexDel);
    // var newList = list.splice(index,1)
    setList(newList)
  }
  const handleEdit = (indexDel) => {
    let newList = list.filter((item,index)=> index !== indexDel)
    console.log(indexDel);
    // var newList = list.splice(index,1)
    setList(newList)
  }
  return (
    <div>
      <form >
        <input type="text" onChange={onChange} value={name} />
        <button type="submit" onClick={onSubmit}>Add</button>
      </form>
      <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      {list.map((item,index)=>(
        <li key={index}>
          {item}
          <button onClick={()=>handleEdit(index)}>Edit</button>
          <button onClick={()=>handleDelete(index)}>Delete</button>
        </li>
      ))}
    </tr>
    
   
  </tbody>
</table>
      </div>
    </div>
  );
}
export default ToDoList;

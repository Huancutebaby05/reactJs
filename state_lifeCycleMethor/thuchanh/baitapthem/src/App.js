import logo from './logo.svg';
import './App.css';
import User from './components/User';
import NewUser from './components/newUser';
import { useState } from 'react';


function App() {
  const [users, setUser] = useState([])
  return (
    <div className="App">
      <NewUser users = {users} setUser = {setUser}/>
      <User users = {users}/>
    </div>
  );
}

export default App;

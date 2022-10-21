import './App.css';
import Home from './pages/home';
import Profile from './pages/profile';
import Header from './component/header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;

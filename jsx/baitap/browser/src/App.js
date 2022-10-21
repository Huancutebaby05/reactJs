import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h4>Browser's details: {navigator.userAgent}</h4>
     <h4>{window.document.URL}</h4>
    </div>
  );
}

export default App;

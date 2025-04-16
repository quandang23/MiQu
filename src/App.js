// App.js
import './App.css';
import Navbar from './Navbar'; 
import logo from './logo.png'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p className="Title">
          Korean Photobooth
        </p>
        <img src={logo} className="logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
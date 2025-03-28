// Navbar.js
import logo from './logo.png'; 
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="Top-nav">
        <div className="nav-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="nav-right">
          <a href="#partnership" className="nav-link">Partnership</a>
        </div>
      </nav>
      <nav className="Bottom-nav">
        <div className="nav-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="nav-right">
          <a href="#partnership" className="nav-link">Partnership</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
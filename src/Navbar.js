// Navbar.js
import { Link } from 'react-router-dom'; // Only import Link, not Routes/Route
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Top-nav">
      <div className="nav-left">
        <Link to="/" className="companyName">
            MiQuStudio
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/partnership" className="partnership">Partnership</Link>
      </div>
    </nav>
  );
}

export default Navbar;
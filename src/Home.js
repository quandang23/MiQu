import React from 'react';
import logo from './logo.png'; 
import './Home.css';

function Home() {
  return (
    <div className='Home'>
        <header className="Home-header">
            <p className="Title">
                Korean Photobooth
            </p>
            <img src={logo} className="logo" alt="logo" />
        </header>
    </div>
  );
}

export default Home;
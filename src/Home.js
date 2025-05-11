import React from 'react';
import logo from './logo.png'; 
import './Home.css';
import Kim from "./Kim.jpeg"

function Home() {
  return (
    <div className='Home'>
        <header className="Home-header">
            <p className="Title">
                Korean Photobooth
            </p>
            <img src={logo} className="logo" alt="logo" />
            <img src={Kim} alt="Kimmy" />
        </header>
    </div>
  );
}

export default Home;
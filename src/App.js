// App.js
import Navbar from './Navbar'; 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Partnership from './Partnership';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Define Routes for page content below the navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnership" element={<Partnership />} />
      </Routes>
    </div>
  );
}

export default App;
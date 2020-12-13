import React from 'react';
import './navbar.css'

function Navbar(props) {
  return (
    <div className='nav-div'>
      <div className='nav-logo'>
        <span>DB</span>
      </div>
      <div className='nav-links'>
        <a href='/'>Home</a>
        <a href='/about-me'>About</a>
        <a href='/portfolio'>Portfolio</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
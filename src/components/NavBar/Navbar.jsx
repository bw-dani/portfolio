import React from 'react';
import DbLogo from '../../images/logo.png'
import './navbar.scss'

function Navbar(props) {
  return (
    <div className='nav-div'>
      <img src={DbLogo} alt="" height='50px' />
      <div className='nav-logo'>
      </div>
      <div className="nav-l-div">
      <div className='nav-links'>
        <a href='/'>Home</a>
        <a href='/about-me'>About</a>
        <a href='/portfolio'>Portfolio</a>
        <a href='/contact'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
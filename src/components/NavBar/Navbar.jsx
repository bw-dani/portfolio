import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

export default function Navbar(props) {
  return (
    <div className='navbar-main-div'>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}
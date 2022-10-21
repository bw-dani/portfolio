import React from 'react';
import { Link } from 'react-scroll';
import './navbar.scss'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-logo'>
          <Link to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            <h1>Home</h1>
          </Link>
        </div>

        <div className='navbar-links'>
          <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            <h1>About</h1>
          </Link>

          <Link to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            <h1>Projects</h1>
          </Link>

          <Link to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            <h1>Contact</h1>
          </Link>
          
        </div>
      </div>
    </div>
  );
}


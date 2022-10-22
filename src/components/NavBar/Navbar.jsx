import React from 'react';
import { Link } from 'react-scroll';
import './navbar.scss'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-home'>
          <Link to='header' smooth={true} duration={500} spy={true} exact='true' offset={-40}>
            Hi, I'm Dani!
          </Link>
        </div>

        <div className='navbar-links'>
          <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-40}>
            About
          </Link>

          <Link to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-40}>
            Projects
          </Link>

          <Link to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-40}>
            Contact
          </Link>
          
        </div>
      </div>
    </div>
  );
}


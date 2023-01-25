import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss'

export default function Navbar(props) {
  const [active, setActive] = useState('');

  const addClass = () => {
    if (window.scrollY >= 80) {
      setActive('active');
    } else {
      setActive('');
    }
  };

  window.addEventListener('scroll', addClass);

  return (
    <div className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-home'>
          <Link to='header' smooth={true} duration={500} spy={true} exact='true' >
            Dani Broadwater
          </Link>
        </div>

        <div className='navbar-links'>
          <Link to='about' smooth={true} duration={500} spy={true} exact='true' >
            About
          </Link>

          <Link to='projects' smooth={true} duration={500} spy={true} exact='true' >
            Projects
          </Link>

          <Link to='contact' smooth={true} duration={500} spy={true} exact='true'>
            Contact
          </Link>
          
        </div>
      </div>
    </div>
  );
}


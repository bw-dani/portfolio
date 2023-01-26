import React from "react";
import { Link } from "react-scroll";
import "./navbar.scss";

export default function Navbar(props) {

  const toggleButton = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    navbarLinks.classList.toggle("active");
  };

  return (
    <div className="navbar container">
      <div className="navbar-container">
        <div className="navbar-home">
          <Link to="header" smooth={true} duration={500} spy={true} exact="true">
            Dani Broadwater
          </Link>
        </div>

        <button className="navbar-toggle" onClick={toggleButton}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className="navbar-links">
          <Link to="about" smooth={true} duration={500} spy={true} exact="true">
            About
          </Link>

          <Link to="projects" smooth={true} duration={500} spy={true} exact="true">
            Projects
          </Link>

          <Link to="contact" smooth={true} duration={500} spy={true} exact="true">
            Contact
          </Link>
        </div>
        
      </div>
    </div>
  );
}

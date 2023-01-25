import React from "react";
import Profile from "./assets/profile.png";
import Arrow from "./assets/arrow.svg";
import "./about.scss";

export default function About(props) {

  const glowText = (e) => {
    // on about image hover, glow about image text
    const aboutImageText = document.querySelector(".about-image-text");
      aboutImageText.classList.add("glow");
    }
    
  const unGlowText = (e) => {
    // on about image hover, unglow about image text
    const aboutImageText = document.querySelector(".about-image-text");
    aboutImageText.classList.remove("glow");
  }

  return (
    <div className="about panel">
      <div className="container">
        <div className="about-info" >
          <h1 className="title">Hi, I'm Dani,</h1>
          <p className="text"> A Junior Software Developer based in Austin, TX. I specialize in front-end development, and I have experience creating responsive, user-friendly websites and web applications that make a positive impact on people's daily lives. My goal is to create accessible, easy-to-use digital products that simplify complex tasks and increase efficiency. I have experience collaborating with other developers, UI/UX designers, and other peers to create and maintain beautiful websites and content management systems. <br /> You can find more information about me on my <a href="https://www.linkedin.com/in/dani-broadwater/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>  and <a href="hhttps://github.com/bw-dani" target="_blank" rel="noopener noreferrer">GitHub repository.</a> Feel free to contact me if you have any questions or would like to discuss a potential project.
          </p>
        </div>
        <div className="about-image">
          <a  href="https://www.linkedin.com/in/dani-broadwater/" target="_blank" rel="noopener noreferrer" onMouseOver={glowText} onMouseLeave={unGlowText}>
            <img src={Profile} alt="Dani Broadwater" />
          </a>
          <div className="about-image-text">
            <span className="text">click the picture to check my LinkedIn </span>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

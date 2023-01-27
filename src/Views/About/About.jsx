import React from "react";
import Profile from "./assets/profile.png";
import "./about.scss";

export default function About(props) {

  const shakeText = (e) => {
    const aboutImageText = document.querySelector(".about-image-text");
      aboutImageText.classList.add("shake");
    }
    
  const unShakeText = (e) => {
    const aboutImageText = document.querySelector(".about-image-text");
    aboutImageText.classList.remove("shake");
  }

  return (
    <div className="about panel">
      <div className="container">
        <div className="about-info" >
          <h1 className="title">Hi, I'm Dani.</h1>
          <p className="text"> A Junior Software Developer based in Austin, TX. I specialize in front-end development, and I have experience creating responsive, user-friendly websites and web applications that make a positive impact on people's daily lives. My goal is to create accessible, easy-to-use digital products that simplify complex tasks and increase efficiency. I have agency experience collaborating with other developers, UI/UX designers, and other peers to create and maintain beautiful websites and content management systems for a wide variety of clients. <br /><br /> You can find more information about me on my <a href="https://www.linkedin.com/in/danielle-broadwater/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>  and <a href="https://github.com/bw-dani" target="_blank" rel="noopener noreferrer">GitHub repository.</a> Feel free to contact me if you have any questions or would like to discuss a potential project.
          </p>
        </div>
        <div className="about-image">
          <a  href="https://www.linkedin.com/in/danielle-broadwater/" target="_blank" rel="noopener noreferrer" onMouseOver={shakeText} onMouseLeave={unShakeText}>
            <img src={Profile} alt="Dani Broadwater" />
          </a>
          <div className="about-image-text">
            <span className="text">click the picture to check my LinkedIn </span>
            <svg width="136" height="90" xmlns="http://www.w3.org/2000/svg"><path d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 0 0-4.824-15.298 6.762 6.762 0 0 1-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854" stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

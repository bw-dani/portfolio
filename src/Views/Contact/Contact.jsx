import React from "react";
import "./contact.scss";

export default function Contact(props) {
  return (
    <div className="contact panel">
      <div className="container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-text">I am currently looking for new opportunities. If you have any questions or would like to discuss potential projects, please feel free to reach out to me.</p>
        <a className="contact-btn" href="mailto:danibroadwater@outlook.com?subject=Hello Dani! I need you to code for me 👩🏽‍💻">
          SAY HELLO!
        </a>
      <div className="footer">
        <div className="icons">
            <a href="https://www.linkedin.com/in/dani-broadwater/" target="_blank" rel="noopener noreferrer"><div className="linkedin"></div></a>
            <a href="https://github.com/bw-dani" target="_blank" rel="noopener noreferrer"><div className="github"></div>
          </a>
        </div>
        <p className="footer-text">Dani Broadwater © 2020</p>
        </div>
      </div>
    </div>
  );
}

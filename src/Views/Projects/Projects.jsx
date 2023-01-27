import React from "react";
import "./projects.scss";

export default function Projects(props) {
  return (
    <div className="projects panel">
      <div className="container">
        <h1 className="project-title">Projects</h1>
        <p className="project-description">
          "I am actively working on updating my portfolio and I am excited to
          share it with you soon. In the meantime, please feel free to take a
          look at some of my{" "}
          <a href="https://github.com/bw-dani?tab=repositories" target="_blank" rel="noopener noreferrer">
            GitHub projects
          </a>. <br />
          <br />
          While working at 3RC, I collaborated on a wide variety of website
          projects including updates, redesigns, maintenance and CMS updates for
          clients such as their own{" "}
          <a className="client trc" href="https://thirdrailcreative.com/" target="_blank" rel="noopener noreferrer">
            3RC website
          </a>
          ,{" "}
          <a className="client ast" href="https://austinstudiotour.org/#/" target="_blank" rel="noopener noreferrer">
            Austin Studio Tour
          </a>
          ,{" "}
          <a className="client hrz" href="https://www.horizon.bank/" target="_blank" rel="noopener noreferrer">
            Horizon Bank
          </a>
          ,{" "}
          <a className="client mntl" href="https://monumental.io/" target="_blank" rel="noopener noreferrer">
            Monumental
          </a>{" "}
          and some of their MMORPGs websites, and numerous other clients."
        </p>
      </div>
    </div>
  );
}

// I am actively working on updating my portfolio and I am excited to share it with you soon. In the meantime, please feel free to take a look at some of my <a href="https://github.com/bw-dani?tab=repositories" target="_blank"  rel="noopener noreferrer">GitHub projects</a> to get a sense of my skills and experience.
//

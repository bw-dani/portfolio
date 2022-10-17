import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import './projects.scss'
import P1 from '../../images/P1.png'
import P2 from '../../images/P2.png'
import P3 from '../../images/P3.png'
import P4 from '../../images/P4.png'



function Projects(props) {

  return (
    <div className='project-main-div'>
      <Navbar />
      <div className='pjt-content'>
        <div className='project'>
          <h1 className='pr-title'>Super-hero Database</h1>
          <span>This website allows you to see your favorite superheroes details such as status,biography,appearance,etc.<br/>
             And the best of it all is compare their power stats.<br />
              HTML | CSS | JavaScript | Axios </span>
          <a href='https://bw-dani.github.io/superheroes-database/' target="_blank" rel="noreferrer">
            <img className='pjct-img' src={ P1} alt="" />
          </a>
          <h5> <a href='https://github.com/bw-dani/superheroes-database' target="_blank" rel="noreferrer">  GitHub link</a></h5>
        </div>
        <hr/>
        <div className='project'>
          <h1 className='pr-title'>Mental Help!</h1>
          <span>Mental Help is a website that allows you to log your feelings and cope with your emotions just like a bullet journal but digital.<br/>
          Keeping a journal is a good way to track your moods, energy levels, and mental health symptoms.<br/>
            Over time, journaling these things might help you recognize things that trigger depression and anxiety.<br />
          HTML |CSS | JavaScript | React |  Axios | Airtable </span>
          <a href='https://mentalhelp.netlify.app/' target="_blank" rel="noreferrer">
            <img className='pjct-img' src={ P2} alt="" />
          </a>
          <h5> <a href='https://github.com/bw-dani/mental-help' target="_blank" rel="noreferrer">  GitHub link</a></h5>
        </div>
        <hr/>
        <div className='project'>
          <h1 className='pr-title'>Election app</h1>
          <span>This concept app is a demonstration of how we can bring one aspect of the election process to the 21st century <br />
           by allowing you to request an absentee ballot for the state of NY from your phone.<br />
          This app was built collaboratively in a team environment of developers and UX designers using Git version control. <br />
          HTML | CSS | JavaScript | React | Axios |  MongoDB | Node Express | GitHub Collaboration </span>
          <a href='https://ballot-request-elections-app.netlify.app' target="_blank" rel="noreferrer">
            <img className='pjct-img' src={ P3} alt="" />
          </a>
          <h5> <a href='https://github.com/bw-dani/election-app' target="_blank" rel="noreferrer">  GitHub link</a></h5>
        </div>
        <hr/>
        <div className='project'>
          <h1 className='pr-title'>Tackle-IT</h1>
          <span>A Productivity app that helps you organize your ideas and tasks, containing a homepage where you can see the summary of all your tasks,<br />
           a to-do page where you can see all off your added tasks and a detail page where you can edit or delete the task. <br />
          HTML | CSS | JavaScript | React | Ruby | Ruby on Rails | Axios</span>
          <a href='https://tackle-it.netlify.app/' target="_blank" rel="noreferrer">
            <img className='pjct-img' src={ P4} alt="" />
          </a>
          <h5> <a href='https://github.com/bw-dani/tackle-it' target="_blank" rel="noreferrer">  GitHub link</a></h5>
        </div>
     
       
      </div>
     
    </div>
  );
}

export default Projects;
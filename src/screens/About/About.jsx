import React from 'react';
import Navbar from '../../Layout/NavBar/Navbar';
import './about.css'
import ArrowRightOutlinedIcon from '../../../node_modules/@material-ui/icons/ArrowRightOutlined';
import Footer from '../../Layout/Footer/Footer';


function About(props) {
  return (
    <div className='about-main-div' >
      <Navbar/>
      <div className='about-div'>
        <h1 className='abt-title'>About me:</h1>
        <span className='about-span'>Hello! I'm Danielle, a Junior Software Engineer based in Austin, TX. <br/>
        I enjoy creating things that live on the internet, whether that be websites, applications,<br/>
        or anything in between. My goal is to always build products that impact people's life.<br/>
        I recently earned my certificate from General Assembly, since then I continue to build my own and freelance projects as well.
        </span>
        <h2 className='abt-title'> Here are a few technologies I've been working with recently:</h2>
        <div className='whole-list'>
          <div className='first-list' >
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span> JavaScript</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span> React</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span> HTML</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span>CSS</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span>Axios</span>
         </div>
        </div>
        <div className='second-list' >
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span> Ruby/Ruby on Rails</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span> Node.js</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span>MongoDB</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span>Express</span>
         </div>
          <div className='tech-list'>
            <ArrowRightOutlinedIcon className='icon' fontSize='large'/><span>Git/Github</span>
         </div>
        </div> 
        </div>
      
      </div>
      <Footer/>
    </div>
  );
}

export default About;
import React from 'react';
import Footer from '../../Layout/Footer/Footer';
import NavBar from '../../Layout/NavBar/Navbar'
import './home.css'

function Home(props) {
  return (
    <div >
      <NavBar />
       <div className='span-hm-div'>
        <span className='first-span'>Hi, my name is </span> 
        <br/>
        <span className='scn-span'>DANIELLE BROADWATER,</span>
        <br/>
        <span className='third-span'>I am a JUNIOR SOFTWARE ENGINEER and I build things for the web.</span>
      </div>
     
    </div>
  );
}

export default Home;
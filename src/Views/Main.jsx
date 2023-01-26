import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/NavBar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import './Main.scss'

gsap.registerPlugin(ScrollTrigger);

export default function Main(props) {

  
  return (
    <>
      <Navbar  />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/NavBar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from '../components/Footer/Footer'
import './Main.scss'

gsap.registerPlugin(ScrollTrigger);

export default function Main(props) {

  useEffect(() => {
    gsap.utils.toArray('.panel').forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      });
    });
  }, [])


  return (
    <>
      <Navbar />
      <Header  />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
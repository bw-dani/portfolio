import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Header from './Header/Header'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from '../components/Footer/Footer'
import './Main.scss'


export default function Main(props) {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
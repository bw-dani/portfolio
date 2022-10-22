import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Header.scss'

gsap.registerPlugin(ScrollTrigger);

export default function Header(props) {
  const headerContent = useRef(null)
  
  useEffect(() => {
    gsap.to(headerContent.current, {
      scrollTrigger: {
        trigger: headerContent.current,
        start: 'top top',
        scrub: true,
        pin: true,
        pinSpacing: false
      }
    })
  }, [])
  
  return (
    <div className='header'>
      <div className='header-content' ref={headerContent}>
        <span className='header-span'>Front End, Creative</span>
        <h1 className='header-title'>DEVELOPER</h1>
        <p className='header-subtitle'>I build websites and web applications based in Austin, TX. I love modern and interactive content!</p>
      </div>
      <div className='overlay'></div>
    </div>
  );
}
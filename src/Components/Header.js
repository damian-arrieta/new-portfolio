import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BgHero from '../Assets/Imgs/bghero.jpeg';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.scrollY;
      setScrollPosition(newPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const maxOpacity = 1;
  const initialOpacity = 0.3;
  const overlayOpacity = Math.min(1, (scrollPosition / 400) * maxOpacity + initialOpacity);

  const overlayStyles = {
    backgroundColor: `rgba(20, 20, 20, ${overlayOpacity})`,
  };

  return (
    <header className='header'>
      <img src={BgHero} className="image-bg" alt="Background" />
      <div className="bg-overlay" style={overlayStyles}></div>
      <Navbar />
      <Hero />
    </header>
  );
}

import React from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div className="cursor-flashlight"></div>
      <div className="bg-mesh"></div>
      
      <nav>
        <div className="nav-content">
          <div className="logo gradient-text">Vijai.AI</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Stack</a>
            <a href="#projects">Systems</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <SkillsGrid />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Vijai Venkatesan. Architected with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;

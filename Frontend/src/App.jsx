import React from 'react'
import Hero from './components/Pages/Hero';
import Resume from './components/Pages/Resume';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import "./App.css";
import Entire_BG from './components/Particle Backgrounds/Entire_BG';

const App = () => {
  return (
    <div>
      <Entire_BG/>
      <Hero/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
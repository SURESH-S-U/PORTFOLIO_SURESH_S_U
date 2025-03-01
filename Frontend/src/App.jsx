import React from 'react'
import Particle_background from './Particle_background';
import Hero from './components/Pages/Hero';
import Resume from './components/Pages/Resume';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import "./App.css";

const App = () => {
  return (
    <div>
      <Particle_background/>
      <Hero/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
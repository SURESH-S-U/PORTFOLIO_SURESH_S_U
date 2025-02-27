import React from 'react'
import Particle_background from './Particle_background';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
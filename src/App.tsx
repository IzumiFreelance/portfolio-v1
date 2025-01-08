import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundEffects from './components/BackgroundEffects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cyber-black text-white selection:bg-cyber-blue selection:text-black">
      <BackgroundEffects />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <div className="flex flex-col gap-0">
          <Experience />
          <Projects />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
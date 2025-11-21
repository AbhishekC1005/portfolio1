import React, { useState } from 'react';
import { Sparkles, Braces, MonitorX } from 'lucide-react';
import ProfileFrame from './ProfileFrame';
import TechCard from './TechCard';

const Hero: React.FC = () => {
  const [activeCard, setActiveCard] = useState(1);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow flex flex-col justify-center py-12 gap-16">
      
      {/* Upper Section: Profile & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start relative group">
           {/* Replace the URL below with your specific hosted image URL */}
           <ProfileFrame imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" />
        </div>

        {/* Right: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative">
           {/* Background Brain Graphic Simulation */}
           <div className="absolute -right-20 -top-20 w-96 h-96 opacity-30 pointer-events-none hidden lg:block">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500 animate-pulse duration-[4s]">
                <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.1,-55.9,76.5,-41.7C83.9,-27.5,88.5,-12.5,86.6,1.9C84.7,16.3,76.3,30.1,66.7,42.3C57.1,54.5,46.3,65.1,33.7,72.4C21.1,79.7,6.7,83.7,-6.6,81.5C-19.9,79.3,-32.1,70.9,-44.1,61.6C-56.1,52.3,-67.9,42.1,-75.2,29.2C-82.5,16.3,-85.3,0.7,-81.3,-13.1C-77.3,-26.9,-66.5,-38.9,-54.8,-46.6C-43.1,-54.3,-30.5,-57.7,-17.8,-60.9C-5.1,-64.1,7.7,-67.1,21.3,-69.5" transform="translate(100 100) scale(1.1)" />
              </svg>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] mix-blend-overlay opacity-50"></div>
           </div>

           <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white cyber-glow tracking-tight leading-tight">
                ABHISHEK <br />
                CHAUDHARI
              </h1>
              
              <h2 className="text-xl md:text-2xl font-display text-blue-500 mt-4 font-semibold tracking-widest uppercase mb-6">
                AI Engineer
              </h2>

              <p className="text-gray-400 font-sans text-lg leading-relaxed max-w-2xl">
                Designing and building end-to-end intelligent systems. My mission? Crafting scalable, user-centric AI solutions that don't just work—they <span className="text-white font-semibold">dominate</span>.
              </p>

              <div className="mt-10">
                <button 
                  onClick={scrollToWork}
                  className="relative overflow-hidden group bg-gradient-to-r from-blue-700 to-blue-500 text-white font-tech font-bold text-xl py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* Lower Section: Dialogue/Tech Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8">
        <TechCard 
          icon={<Sparkles className="text-blue-400 w-5 h-5" />}
          text="My models don't just predict the future, they create it."
          subtext="Savage Dialogue #1"
          active={activeCard === 0}
          onClick={() => setActiveCard(0)}
        />
        
        <TechCard 
          icon={<Braces className="text-blue-400 w-5 h-5" />}
          text="You bring the data. I'll bring the 'holy shit' moment."
          subtext="Savage Dialogue #2"
          active={activeCard === 1}
          onClick={() => setActiveCard(1)}
        />

        <TechCard 
          icon={<MonitorX className="text-blue-400 w-5 h-5" />}
          text="Error 404: Conventional thinking not found."
          subtext="Savage Dialogue #3"
          active={activeCard === 2}
          onClick={() => setActiveCard(2)}
        />
      </div>

    </main>
  );
};

export default Hero;
import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dark Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-[#050810]" />

      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `linear-gradient(to right, #4a5568 1px, transparent 1px), linear-gradient(to bottom, #4a5568 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Circuit Board Accents - SVG Overlays */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        
        {/* Top Left Circuit */}
        <path d="M0 100 L50 100 L100 50 L300 50" stroke="url(#circuit-grad)" strokeWidth="1" fill="none" />
        <circle cx="300" cy="50" r="3" fill="#3b82f6" />
        
        {/* Right Side Neural Network Hint */}
        <path d="M1000 100 L1100 200 M1100 200 L1200 150 M1100 200 L1150 300" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" fill="none" />
      </svg>

      {/* Glow spots */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px]" />
    </div>
  );
};

export default BackgroundEffects;
import React from 'react';

interface TechCardProps {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  active?: boolean;
  onClick?: () => void;
}

const TechCard: React.FC<TechCardProps> = ({ icon, text, subtext, active = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative group h-full cursor-pointer"
    >
      {/* Card Body */}
      <div 
        className={`
          relative h-full p-6 flex flex-col justify-between
          bg-[#0b101a]/80 backdrop-blur-sm 
          border border-blue-500/30 
          transition-all duration-300
          ${active ? 'shadow-[0_0_20px_rgba(59,130,246,0.2)] border-blue-400/50' : 'hover:border-blue-400/50 hover:bg-[#0b101a]'}
        `}
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
        }}
      >
        {/* Top Decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
             <div className="absolute top-0 right-[20px] w-[40px] h-[1px] bg-blue-500/50"></div>
             <div className="absolute top-[20px] right-0 w-[1px] h-[40px] bg-blue-500/50"></div>
             <div className="absolute top-[6px] right-[6px] w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_5px_#3b82f6]"></div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded border border-blue-500/30 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.15)]">
            {icon}
          </div>
          
          <p className="font-sans font-medium text-gray-200 text-lg leading-snug">
            {text}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-xs font-tech uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
            {subtext}
          </span>
          <div className={`w-2 h-2 rounded-full ${active ? 'bg-blue-400 animate-pulse' : 'bg-gray-700 group-hover:bg-blue-400'}`}></div>
        </div>
      </div>
      
      {/* Bottom Border Glow Effect (Pseudo-element simulation) */}
      <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default TechCard;
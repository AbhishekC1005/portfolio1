import React from 'react';

interface ProfileFrameProps {
  imageUrl: string;
}

const ProfileFrame: React.FC<ProfileFrameProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[450px] flex items-center justify-center">
      
      {/* SVG Frame Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 380 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          {/* Outer border path with notches */}
          <path 
            d="M20 0 H360 L380 20 V430 L360 450 H20 L0 430 V20 L20 0Z" 
            stroke="#334155" 
            strokeWidth="2" 
            fill="none"
          />
          
          {/* Inner border glowing accents */}
          <path d="M20 450 L0 430 V350" stroke="#3b82f6" strokeWidth="4" className="opacity-60" />
          <path d="M360 0 L380 20 V120" stroke="#3b82f6" strokeWidth="4" className="opacity-60" />
          
          {/* Decorative HUD elements */}
          <rect x="-5" y="100" width="3" height="40" fill="#3b82f6" className="opacity-50" />
          <rect x="-5" y="150" width="3" height="20" fill="#3b82f6" className="opacity-30" />
          
          <rect x="382" y="280" width="3" height="40" fill="#3b82f6" className="opacity-50" />
        </svg>
      </div>

      {/* Image Container */}
      <div className="absolute inset-2 z-10 bg-gray-900 overflow-hidden" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
        <img 
          src={imageUrl} 
          alt="Abhishek Chaudhari" 
          className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105 hover:opacity-100"
        />
        {/* Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
      </div>
      
      {/* Behind Glow */}
      <div className="absolute inset-0 -z-10 bg-blue-600/20 blur-3xl rounded-full opacity-40"></div>

    </div>
  );
};

export default ProfileFrame;
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-12 relative ${className}`}>
      <div className="flex items-center gap-4 mb-2">
         <div className="h-[2px] w-12 bg-blue-500"></div>
         <p className="font-tech text-blue-400 tracking-widest uppercase text-sm md:text-base">
          {subtitle}
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight relative z-10">
        {title}
        <span className="text-blue-500">.</span>
      </h2>
      <div className="absolute -left-4 -top-10 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>
    </div>
  );
};

export default SectionHeader;
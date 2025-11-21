import React from 'react';
import { Code2, Briefcase, Mail, Terminal, Laptop, AtSign } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full py-6 flex items-center justify-between border-b border-white/5">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8">
           <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50 rounded-full"></div>
           <Code2 className="relative w-6 h-6 text-blue-400" />
        </div>
        <span className="font-display font-bold text-xl tracking-wider text-white">
          ABHISHEK CHAUDHARI
        </span>
      </div>

      {/* Center Links - Hidden on mobile, visible on md+ */}
      <div className="hidden md:flex items-center gap-12 font-tech text-lg tracking-wide text-gray-400">
        <a href="#work" className="hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Work</a>
        <a href="#about" className="hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">About</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Contact</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <IconButton onClick={() => scrollToSection('skills')} icon={<Terminal size={18} />} />
        <IconButton onClick={() => scrollToSection('experience')} icon={<Briefcase size={18} />} />
        <IconButton onClick={() => scrollToSection('contact')} icon={<AtSign size={18} />} />
      </div>
    </nav>
  );
};

const IconButton: React.FC<{ icon: React.ReactNode, onClick?: () => void }> = ({ icon, onClick }) => (
  <button 
    onClick={onClick}
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-pointer"
  >
    {icon}
  </button>
);

export default Navbar;
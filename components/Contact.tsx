import React from 'react';
import SectionHeader from './SectionHeader';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 pb-32">
      <SectionHeader title="Get In Touch" subtitle="Let's Connect" />
      
      <div className="bg-gradient-to-br from-[#0f1623] to-[#0b101a] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative bg elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
           <div>
             <h3 className="text-3xl font-display font-bold text-white mb-4">Let's build something <span className="text-blue-500">legendary</span>.</h3>
             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
               I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
             </p>
             
             <div className="flex flex-col gap-6">
                <a href="mailto:abhishekchaudhari336@gmail.com" className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                     <Mail size={20} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-tech uppercase">Email Me</p>
                     <p className="text-white font-medium group-hover:text-blue-400 transition-colors">abhishekchaudhari336@gmail.com</p>
                   </div>
                </a>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                     <Phone size={20} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-tech uppercase">Call Me</p>
                     <p className="text-white font-medium group-hover:text-blue-400 transition-colors">+91 8010304588</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 group">
                   <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-tech uppercase">Location</p>
                     <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Pune, Maharashtra</p>
                   </div>
                </div>
             </div>
           </div>

           <div className="flex flex-col gap-4 items-center md:items-end">
              <div className="bg-[#050810] p-8 rounded-xl border border-white/5 w-full max-w-md text-center relative group hover:border-blue-500/30 transition-colors">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <h4 className="text-xl font-bold text-white mb-6">Connect on Socials</h4>
                <div className="flex justify-center gap-4">
                   <SocialButton icon={<Linkedin size={24} />} label="LinkedIn" href="#" />
                   <SocialButton icon={<Github size={24} />} label="GitHub" href="#" />
                </div>
              </div>
           </div>
        </div>
      </div>
      
      {/* Footer specific small print */}
      <div className="mt-20 text-center border-t border-white/5 pt-8 text-gray-600 text-sm">
        <p>© 2025 Abhishek Chaudhari. Engineered with React & Tailwind.</p>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode, label: string, href: string }> = ({ icon, label, href }) => (
  <a href={href} className="flex flex-col items-center gap-2 group">
    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30 hover:scale-110">
      {icon}
    </div>
    <span className="text-xs font-tech uppercase tracking-wider text-gray-500 group-hover:text-blue-400 transition-colors">{label}</span>
  </a>
);

export default Contact;
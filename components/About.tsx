import React from 'react';
import SectionHeader from './SectionHeader';
import { GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <SectionHeader title="About Me" subtitle="Who I Am" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Summary */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent">
          <div className="bg-cyber-gray/80 backdrop-blur-xl p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
              <User size={48} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Profile Summary</h3>
            <p className="text-gray-300 leading-relaxed font-sans text-lg">
              Third-year AI & Data Science student who designs and builds end-to-end intelligent systems. My experience spans from developing secure RAG pipelines for healthcare to creating agentic assistants, using modern stacks like LangChain, FastAPI, Google ADK and Hugging Face. I am driven by building scalable, user-centric AI solutions and am currently exploring multi-agent orchestration.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent">
           <div className="bg-cyber-gray/80 backdrop-blur-xl p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <GraduationCap size={48} className="text-blue-400" />
             </div>
             <h3 className="text-2xl font-display font-bold text-white mb-6">Education</h3>
             
             <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white">B.E. in Artificial Intelligence and Data Science</h4>
                  <p className="text-blue-400 font-tech text-lg">Pune Institute of Computer Technology | Pune, India</p>
                  <p className="text-gray-500 text-sm mt-1">2023 - 2027</p>
                </div>
                
                <div className="w-full h-[1px] bg-white/10 my-2"></div>
                
                <div className="flex justify-between items-center">
                   <span className="text-gray-300">CGPA (Till 4th Sem)</span>
                   <span className="font-display text-2xl font-bold text-blue-400">9.51<span className="text-base text-gray-500">/10</span></span>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'NLP', 'Big Data', 'Deep Learning'].map(course => (
                      <span key={course} className="px-3 py-1 text-xs font-tech rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
export default About;
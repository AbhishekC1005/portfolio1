import React from 'react';
import { Cpu, Database, Terminal, Wrench } from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    items: ["Python", "C++"]
  },
  {
    category: "AI/ML",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    items: ["NLP", "LangChain", "LangGraph", "Deep Learning", "FastAPI", "Google ADK"]
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: ["SQL", "MongoDB", "Pinecone", "Vector DB"]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    items: ["Git", "Postman", "Hugging Face", "LLMs"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#0b101a] border border-white/5 p-6 rounded-lg hover:border-blue-500/30 transition-colors duration-300 group">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    {skillGroup.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg">{skillGroup.category}</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-2 py-1 text-sm font-mono text-gray-400 bg-white/5 rounded border border-white/5 group-hover:text-white group-hover:border-white/20 transition-all">
                      {item}
                    </span>
                  ))}
               </div>
            </div>
          ))}
       </div>
    </section>
  );
};
export default Skills;
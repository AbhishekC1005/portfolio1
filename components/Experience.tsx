import React from 'react';
import SectionHeader from './SectionHeader';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: "AI Intern",
      company: "Tenancy Passport",
      period: "Aug 2025 - Dec 2025",
      title: "RAG Multi-Model Document Processing System",
      description: [
        "Designed and implemented a multi-modal Retrieval-Augmented Generation (RAG) system capable of intelligent document ingestion and retrieval.",
        "Key features include Advanced Content Extraction, Multi-Model Embedding Support, and Secure Vector Search.",
        "Scalable and Modular Design optimized for real-world document workflows."
      ],
      side: "left"
    },
    {
      id: 2,
      role: "B.E. in AI & Data Science",
      company: "Pune Institute of Computer Technology",
      period: "2023 - 2027",
      title: "Academic Excellence & Core Foundation",
      description: [
        "Pursuing Bachelor of Engineering in Artificial Intelligence and Data Science.",
        "Current CGPA: 9.51/10.0 (Till 4th Semester).",
        "Relevant Coursework: Machine Learning, Natural Language Processing, Big Data, Deep Learning."
      ],
      side: "right"
    }
  ];

  return (
    <section className="py-20 relative" id="experience">
      <SectionHeader title="Experience" subtitle="Professional Journey" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent transform md:translate-x-[-0.5px]"></div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row ${exp.side === 'right' ? 'md:flex-row-reverse' : ''} items-start`}>
               
               {/* Spacer for the other side on Desktop */}
               <div className="hidden md:block md:w-1/2"></div>

               {/* Dot */}
               <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] z-10 transform -translate-x-1/2 mt-1.5 md:mt-1.5`}>
                  <div className="absolute inset-0 bg-blue-400 animate-ping rounded-full opacity-50"></div>
               </div>

               {/* Content Card */}
               <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${exp.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                 <div className="bg-gradient-to-br from-[#111827] to-[#0b101a] p-1 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.1)] border border-blue-500/20 group hover:border-blue-500/50 transition-all duration-500 relative">
                    
                    <div className="bg-cyber-gray p-6 rounded-lg relative overflow-hidden">
                      {/* Decorative blur */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl -mr-10 -mt-10"></div>
                      
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white font-display tracking-wide">{exp.role}</h3>
                          <p className="text-blue-400 font-tech text-lg">{exp.company}</p>
                        </div>
                        <div className="self-start xl:self-auto px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-xs text-blue-300 font-mono whitespace-nowrap">
                          {exp.period}
                        </div>
                      </div>
                      
                      <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider border-b border-white/5 pb-2">{exp.title}</h4>
                      
                      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
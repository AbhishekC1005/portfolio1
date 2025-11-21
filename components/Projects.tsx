import React from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Ayurveda Assistant",
    subtitle: "Agentic Healthcare Application",
    description: "Agentic healthcare assistant using RAG architecture, integrating OpenAI GPT, Google Search, MongoDB Atlas, and GCS. Features a personalized 7-day Ayurvedic diet planner and interactive Q&A.",
    tags: ["RAG", "OpenAI", "MongoDB", "FastAPI", "Streamlit"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Medical Chatbot",
    subtitle: "RAG-based Knowledge System",
    description: "Built using LangChain, LLaMA-3 70B, and Hugging Face embeddings with Pinecone vector DB to retrieve and summarize medical knowledge. Exposed via Flask APIs.",
    tags: ["LangChain", "LLaMA-3", "Pinecone", "Flask", "Python"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Job Recommendation System",
    subtitle: "AI-Based Matching Engine",
    description: "Content-based recommendation system using TF-IDF vectorization and cosine similarity. Enhanced with fuzzy logic to handle job title variations for blue-collar workers.",
    tags: ["TF-IDF", "ML", "Python", "Fuzzy Logic", "Recommendation"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20">
      <SectionHeader title="Featured Projects" subtitle="What I've Built" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-[#0b101a] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full">
            
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Tech overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0b101a] to-transparent z-20">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                   {project.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/20 backdrop-blur-md">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-tech text-gray-500 uppercase tracking-widest mb-4">{project.subtitle}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/btn">
                  <Github size={16} />
                  <span>Source</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/btn">
                  <span>Details</span>
                  <ArrowUpRight size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
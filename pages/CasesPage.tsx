
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavProps } from '../types';

const CasesPage: React.FC<NavProps> = ({ navigate }) => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { 
      title: "Fintech healthy app", 
      category: "App Development", 
      type: "App", 
      image: "work/fintech-healthy-app.jpg", 
      year: "2024" 
    },
    { 
      title: "Pixoo e-commerce", 
      category: "Web Design", 
      type: "Web", 
      image: "work/pixoo-ecommerce.jpg", 
      year: "2024" 
    },
    { 
      title: "world clock", 
      category: "Product Design", 
      type: "Branding", 
      image: "work/world-clock.jpg", 
      year: "2023" 
    },
    { 
      title: "crypto exchange App", 
      category: "Web3", 
      type: "App", 
      image: "work/crypto-exchange-app.jpg", 
      year: "2023" 
    },
    { 
      title: "SAAS website", 
      category: "Web App", 
      type: "Web", 
      image: "work/saas-website.jpg", 
      year: "2023" 
    },
    { 
      title: "offline first ad app", 
      category: "Development", 
      type: "App", 
      image: "work/offline-first-ad-app.jpg", 
      year: "2024" 
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="animate-fadeIn pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter">Selected Works</h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
            We partner with forward-thinking companies to design and build digital products that people love to use.
          </p>
          
          <div className="flex gap-2 flex-wrap">
            {['All', 'Web', 'App', 'Branding'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-300 border ${
                  filter === f 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
               <div className="w-full aspect-[4/3] overflow-hidden mb-6 relative bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=60&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
               </div>
               <div className="flex justify-between items-start border-t border-gray-200 pt-6 group-hover:border-black transition-colors">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                    <div className="flex gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <span>{project.category}</span>
                      <span className="text-gray-300">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasesPage;

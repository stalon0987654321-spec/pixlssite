
import React, { useState } from 'react';

const ServicesSection = () => {
  // Initialize with empty array so no service is open by default
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setActiveIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      id: "001",
      title: "Development",
      description: "Comprehensive technical implementation ensuring scalable architecture, clean code, and robust performance for your digital infrastructure.",
      tags: ["Full Stack", "API Integration", "Cloud Architecture", "Database Design", "Performance Optimization"]
    },
    {
      id: "002",
      title: "Design",
      description: "Crafting intuitive and visually stunning user experiences that align with your brand identity and solve complex user problems.",
      tags: ["UI/UX", "Visual Identity", "Prototyping", "Design Systems", "User Research"]
    },
    {
      id: "003",
      title: "Web Apps",
      description: "Building powerful, responsive, and secure browser-based software solutions tailored to streamline your business operations.",
      tags: ["SaaS Platforms", "Progressive Web Apps (PWA)", "Dashboards", "Single Page Apps", "Real-time Updates"]
    },
    {
      id: "004",
      title: "Applications (Android and IOS)",
      description: "Developing native and cross-platform mobile applications that provide seamless experiences across all devices and app stores.",
      tags: ["React Native", "Native iOS (Swift)", "Native Android (Kotlin)", "App Store Optimization", "Mobile UI"]
    },
    {
      id: "005",
      title: "SEO & GEO",
      description: "Strategic search engine optimization and targeted location-based marketing to increase visibility, drive traffic, and capture local market share.",
      tags: ["Technical SEO", "Local Search", "Google Business Profile", "Content Strategy", "Map Optimization", "Keyword Analysis"]
    }
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-6 md:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 border-b border-[#333] pb-6">
            <span className="font-mono text-sm text-[#666]">03</span>
            <h3 className="text-xl tracking-wide font-medium">OUR SERVICES</h3>
        </div>
        
        <div className="flex flex-col">
          {services.map((service, index) => {
            const isActive = activeIndices.includes(index);
            return (
              <div key={service.id} className="border-b border-[#333] py-8 first:border-t-0">
                <button 
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start text-left group focus:outline-none"
                >
                  <span className="font-mono text-base text-white w-[60px] pt-2 flex-shrink-0">{service.id}</span>
                  <h2 className="text-3xl md:text-4xl font-medium flex-grow pr-8 tracking-tight">{service.title}</h2>
                  
                  {/* Custom Icon Circle */}
                  <div className={`w-9 h-9 border border-[#666] rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors duration-300 group-hover:border-white`}>
                    <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                      {/* Horizontal Line */}
                      <div className="absolute w-3.5 h-[1px] bg-white"></div>
                      {/* Vertical Line (Rotates) */}
                      <div className={`absolute w-3.5 h-[1px] bg-white transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-90'}`}></div>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-0 md:pl-[60px]">
                    <p className="text-[#999] text-lg mb-6 max-w-[90%] leading-relaxed">
                      {service.description}
                    </p>
                    <span className="block text-sm text-[#666] mb-3">Categories</span>
                    <div className="flex flex-wrap gap-2.5">
                      {service.tags.map(tag => (
                        <span key={tag} className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

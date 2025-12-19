import React from 'react';
import SectionHeading from '../components/SectionHeading';

const AboutPage: React.FC = () => (
  <div className="animate-fadeIn pt-40 pb-24 px-6 md:px-12 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black uppercase mb-16 tracking-tighter">About Pixls</h1>
      
      <div className="max-w-3xl mb-24">
        <div>
          <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We believe that great design is not just about making things look good. It's about solving problems and creating meaningful connections between brands and people.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Recently founded, our company is built on 2–3 years of hands-on industry experience. We’ll be successfully delivering reliable, high-quality solutions designed for long-term impact.
          </p>
        </div>
      </div>

      <SectionHeading number="03" title="Our Process" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {[
          { step: "01", title: "Discover", desc: "We analyze your business goals and market landscape." },
          { step: "02", title: "Strategy", desc: "We define the roadmap and technical architecture." },
          { step: "03", title: "Create", desc: "We design and build with pixel-perfect precision." },
          { step: "04", title: "Launch", desc: "We deploy, monitor, and iterate for success." }
        ].map((item) => (
          <div key={item.step} className="border-t border-gray-200 pt-6">
            <span className="text-4xl font-black text-gray-200 mb-4 block">{item.step}</span>
            <h4 className="text-xl font-bold uppercase mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
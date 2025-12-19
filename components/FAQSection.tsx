import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-8 flex justify-between items-start text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl md:text-2xl font-bold uppercase pr-8 group-hover:text-gray-600 transition-colors leading-tight">
          {question}
        </span>
        <span className={`text-2xl transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line max-w-3xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Most websites are completed within 7 to 14 days. Smaller business websites may be delivered sooner, while larger or custom projects can take longer depending on features, pages, and feedback timelines. A clear delivery schedule is shared before the project starts."
    },
    {
      q: "How much does a website cost?",
      a: "Website cost depends on pages, features, and level of customisation. After understanding your requirements, Pixls Web Solution provides a clear and transparent quote with no hidden charges."
    },
    {
      q: "Do you offer custom websites or use templates?",
      a: "We offer both custom-built websites and premium template-based designs. Custom websites are created from scratch for a unique brand presence, while templates are fully customised for faster delivery and cost efficiency."
    },
    {
      q: "Will my website be mobile-friendly and SEO-ready?",
      a: "Yes. Every website built by Pixls Web Solution is fully responsive, mobile-friendly, and developed using SEO best practices including clean structure, fast performance, and search-friendly content."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We redesign existing websites to improve design, speed, mobile experience, and conversions while preserving important content and SEO value."
    },
    {
      q: "How do I get started with Pixls Web Solution?",
      a: "You can get started by contacting Pixls Web Solution through pixlswebsolution.store or WhatsApp. Share your requirements, and we’ll recommend the best solution and begin once approved."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading number="04" title="FAQ" />
        <div className="mt-8 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
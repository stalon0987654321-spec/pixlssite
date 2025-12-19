import React from 'react';
import { FAQItem } from '../components/FAQSection';

const FAQPage: React.FC = () => {
  const allFaqs = [
    {
      q: "What type of websites do you design?",
      a: "We design high-quality business websites, conversion-focused landing pages, eCommerce platforms, portfolios, and fully custom web experiences aligned with your brand strategy and business objectives."
    },
    {
      q: "Will my website design be unique to my brand?",
      a: "Yes. Every website is designed to reflect your brand identity. We create tailored layouts, visual systems, and user experiences that ensure your website is distinctive, professional, and aligned with your positioning."
    },
    {
      q: "Do you design websites for mobile and tablet devices?",
      a: "Absolutely. All websites are designed using a mobile-first approach and tested across smartphones, tablets, and desktops to deliver a consistent and polished experience on every device."
    },
    {
      q: "Can you redesign and modernise an existing website?",
      a: "Yes. We modernise existing websites by enhancing design, usability, performance, and conversion efficiency while preserving valuable content and SEO equity."
    },
    {
      q: "Do you assist with website content and visuals?",
      a: "Yes. We help refine website structure, optimise content for clarity and search visibility, and recommend or source high-quality visuals that support your brand message."
    },
    {
      q: "What technologies do you use for web development?",
      a: "We use modern, secure, and scalable technologies selected specifically for your project requirements, ensuring long-term performance, flexibility, and maintainability."
    },
    {
      q: "Will my website be fast and performance-optimised?",
      a: "Yes. Performance optimisation is built into every project. We focus on clean code, efficient asset delivery, and speed optimisation to deliver fast-loading, reliable websites."
    },
    {
      q: "Can you develop custom features and integrations?",
      a: "Yes. We build custom features such as advanced forms, dashboards, booking systems, payment gateways, APIs, and third-party integrations tailored to your operational needs."
    },
    {
      q: "Is security included in your development process?",
      a: "Yes. We implement SSL, secure development practices, and regular update protocols to safeguard your website, infrastructure, and user data."
    },
    {
      q: "Can I manage and update my website after launch?",
      a: "Yes. We deliver websites with intuitive management systems, allowing your team to update content, pages, and media without technical dependency."
    },
    {
      q: "Do you develop mobile applications for Android and iOS?",
      a: "Yes. We design and develop high-performance mobile applications for Android, iOS, and cross-platform environments, tailored to your product goals."
    },
    {
      q: "Can you build scalable apps for startups and enterprises?",
      a: "Yes. Our applications are engineered for scalability, allowing businesses to grow users, features, and integrations without performance limitations."
    },
    {
      q: "Do you provide post-launch app support and maintenance?",
      a: "Yes. We offer ongoing maintenance, updates, performance monitoring, and technical support to ensure long-term stability and growth."
    },
    {
      q: "Can you integrate APIs, payments, and automation tools?",
      a: "Yes. We integrate third-party APIs, payment systems, authentication services, and automation tools to streamline operations and enhance functionality."
    },
    {
      q: "What are AI agents and automation solutions?",
      a: "AI agents are intelligent automation systems designed to handle tasks such as customer interactions, lead processing, data workflows, and operational automation with minimal human involvement."
    },
    {
      q: "How can AI agents benefit my business?",
      a: "AI agents improve efficiency by reducing manual effort, accelerating response times, improving consistency, and enabling 24/7 operations."
    },
    {
      q: "Are AI agents customised for each business?",
      a: "Yes. Every AI agent is designed around your workflows, tools, and business objectives to ensure measurable operational value."
    },
    {
      q: "Can AI solutions integrate with existing systems?",
      a: "Yes. Our AI solutions integrate seamlessly with websites, applications, CRMs, and third-party platforms."
    },
    {
      q: "Is data security ensured in AI automation projects?",
      a: "Yes. We follow strict data protection and security practices to ensure confidentiality, integrity, and compliance throughout AI automation processes."
    }
  ];

  return (
    <div className="animate-fadeIn pt-40 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter">FAQ</h1>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl">
          Everything you need to know about our services, process, and technical capabilities.
        </p>
        
        <div className="border-t border-gray-200">
          {allFaqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
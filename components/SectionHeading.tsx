import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  borderColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title, borderColor = "border-gray-200" }) => (
  <div className={`flex items-start mb-12 border-t ${borderColor} pt-8 animate-fadeIn`}>
    <span className="text-xs font-bold text-gray-400 mr-4 mt-1">{number}</span>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">{title}</h2>
  </div>
);

export default SectionHeading;

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
  className?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, category, image, onClick, className = "" }) => (
  <div onClick={onClick} className={`group relative cursor-pointer block overflow-hidden ${className}`}>
    <div className="w-full aspect-[4/3] overflow-hidden mb-4 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <div className="flex justify-between items-end border-b border-gray-200 pb-4 group-hover:border-black transition-colors">
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase mb-1">{category}</p>
        <h3 className="text-xl font-bold uppercase group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
      </div>
      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>
);

export default CaseCard;

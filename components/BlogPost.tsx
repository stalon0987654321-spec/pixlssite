import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, category, excerpt }) => (
  <div className="group cursor-pointer flex flex-col h-full border border-gray-100 p-8 hover:border-black transition-colors duration-300 bg-white">
    <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
      <span className="text-black">{category}</span>
      <span className="mx-2">•</span>
      <span>{date}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">{title}</h3>
    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
      {excerpt}
    </p>
    <div className="flex items-center text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
      Read Article <ArrowRight className="w-4 h-4 ml-2" />
    </div>
  </div>
);

export default BlogPost;
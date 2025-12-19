import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', onClick }) => {
  return (
    <button 
      className={`glitch-wrapper relative inline-block cursor-pointer focus:outline-none leading-none ${className}`}
      data-text={text}
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default GlitchText;
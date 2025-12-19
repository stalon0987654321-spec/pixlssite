import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white' | 'outlineWhite';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 border focus:outline-none";
  const variants = {
    primary: "bg-black text-white border-black hover:bg-white hover:text-black",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white",
    white: "bg-white text-black border-white hover:bg-black hover:text-white hover:border-black",
    outlineWhite: "bg-transparent text-white border-white hover:bg-white hover:text-black"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
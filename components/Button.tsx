import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = "inline-block px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-300 border cursor-pointer text-center rounded-full";

  const variants = {
    primary: "bg-blue-fusion-gold border-blue-fusion-gold text-black hover:bg-transparent hover:text-white hover:border-white",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-black",
    dark: "bg-[#2e2e2e] border-[#2e2e2e] text-white hover:bg-transparent hover:border-black hover:text-black", // Dark background for light sections if needed
    // The specific style from the screenshot for "Direct reserveren" on dark bg seems to be goldish solid.
    // "Tafel reserveren" in header is outlined.
  };

  // Custom overrides for specific site look
  const specificStyles = variant === 'primary'
    ? "bg-[#C8BBA6] border-[#C8BBA6] text-black hover:bg-[#b0a28d]"
    : variant === 'outline'
      ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
      : "bg-[#4a4a4a] text-white border-[#4a4a4a] hover:bg-black"; // Fallback

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${specificStyles} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Button;
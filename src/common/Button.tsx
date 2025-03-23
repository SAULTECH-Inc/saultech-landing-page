import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset"; // Limits valid button types
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    type = "button", 
    disabled = false, 
    className = ""
}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`border-4 border-[#EF5613] hover:bg-[#f3a17e] shadow-[0px_0px_64px_0px_#EF561347] 
    p-4 text-white bg-black transition-transform duration-300 ease-out 
    ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
  >
    {children}
  </button>
  );
};

export default Button;
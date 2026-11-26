import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "font-semibold text-sm sm:text-base rounded-full transition-all duration-300 ease-out flex items-center justify-center cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white hover:brightness-110 hover:shadow-[0_0_24px_rgba(239,86,19,0.55)] hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border-2 border-[#EF5613] text-[#EF5613] hover:bg-[#EF5613]/10 hover:shadow-[0_0_20px_rgba(239,86,19,0.3)] hover:scale-[1.02] active:scale-[0.98]",
    ghost:
      "text-gray-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <div>
      <button
        className="relative disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition w-full bg-blue-600"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
      {Icon && <Icon size={24} className="absoulte left-4 top-3" />}
    </div>
  );
};

export default Button;

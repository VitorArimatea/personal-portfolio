"use client";

import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  position = "left",
  handleClick,
  otherClasses = "",
}) => {
  return (
    <div>
      <HoverBorderGradient
        as="button"
        onClick={handleClick}
        containerClassName="relative inline-flex h-12.5 overflow-hidden rounded-lg p-[1px] md:w-60 mt-10"
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0b1124] dark:bg-[#0A1128] px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2.5 ${otherClasses}`}
      >
        {position === "left" && icon}

        <span className="relative z-10">{title}</span>

        {position === "right" && icon}
      </HoverBorderGradient>
    </div>
  );
};

export default Button;

import React from "react";

type GradientTickProps = {
  className?: string;
};

const GradientTick = ({ className = "" }: GradientTickProps) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M1.5 7.5L6.5 12L16.5 1.5"
        stroke="url(#tickGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="tickGradient"
          x1="0"
          y1="0"
          x2="18"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7CFF6B" />
          <stop offset="1" stopColor="#5ED3C6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientTick;

"use client";

import { useEffect, useState } from "react";

type FeatureCardProps = {
  title: string;
  texts: string[];
  iconSrc: string;
};

const FeatureCard = ({ title, texts=[], iconSrc }: FeatureCardProps) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const waitTimer = setTimeout(() => {
      setAnimate(true);

      const animTimer = setTimeout(() => {
        setAnimate(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 900);

      return () => clearTimeout(animTimer);
    }, 2000);

    return () => clearTimeout(waitTimer);
  }, [index, texts.length]);

  return (
    <div className="w-[286px] h-[286px] rounded-2xl bg-[#0B1F4A] p-6 text-white shadow-lg flex flex-col items-center">
      {/* Icon */}
      <div className="mb-6 flex h-[140px] w-[164px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400">
        <img
          src={iconSrc}
          alt={title}
          className="h-20 w-20 object-contain invert brightness-200"
        />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Animated text */}
      <div className="relative mt-2 h-6 w-full overflow-hidden">
        <p
          className={`absolute top-0 w-full text-center text-sm text-blue-200
          ${animate ? "animate-[slideUpOut_0.9s_ease-out_forwards]" : ""}`}
        >
          {texts[index]}
        </p>

        <p
          className={`absolute top-0 w-full text-center text-sm text-blue-200
          ${animate ? "animate-[slideUpIn_0.9s_ease-out_forwards]" : "translate-y-full"}`}
        >
          {texts[(index + 1) % texts.length]}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";

const SEGMENTS = {
  continuity: {
    title: "Continuity",
    description:
      "From IT automation to training & certification, HawkStack empowers clients with comprehensive solutions to empower your business.",
  },
  unified: {
    title: "Unified",
    description:
      "Unified platforms that bring operations, automation, and observability together for enterprise scale.",
  },
  vision: {
    title: "Vision",
    description:
      "Strategic foresight and architecture that aligns technology with long-term business goals.",
  },
  assurance: {
    title: "Assurance",
    description:
      "Enterprise-grade security, compliance, and reliability across your cloud-native ecosystem.",
  },
};
const SEGMENT_POSITIONS = {
  continuity: " bottom-90 right-130 ",
  unified: "bottom-90 left-130 ",
  vision: "bottom-1 right-130 ",
  assurance: "bottom-1 left-130 ",
};

const WhyHawkstackSvg: React.FC = () => {
  const [activeSegment, setActiveSegment] = React.useState<
    keyof typeof SEGMENTS | null
  >(null);

  const handleEnter = (key: keyof typeof SEGMENTS) => {
    setActiveSegment(key);
  };

  const handleLeave = () => {
    setActiveSegment(null);
  };
  return (
    <div className="relative z-20 mt-6 ml-6.5 w-[443px] h-[443px] rounded-full ">
      {/* Center white circle ABOVE segments */}
      <div className="absolute inset-0 z-[100] pointer-events-none">
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-[242.16px] h-[242.16px] rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.55)]" />
        </div>

        {/* TOP white/grey circle */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-[225px] h-[225px] rounded-full bg-[linear-gradient(90deg,#FFFFFF_-41.98%,#D8D2D2_137.74%)]" />
        </div>

        {/* Dashed border circle */}
        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
          <svg width="210.84" height="210.93" viewBox="0 0 211 211">
            <circle
              cx="105.5"
              cy="105.5"
              r="104.5"
              fill="none"
              stroke="#1E5FFF"
              strokeWidth="1"
              strokeDasharray="5 5"
              strokeLinecap="butt"
              opacity="1"
            />
          </svg>
        </div>

        {/* Center logo/image */}
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <Image
            src="/images/logo.circle.webp"
            alt="center logo"
            width={112}
            height={110}
            className="object-contain opacity-100"
          />
        </div>
      </div>

      {/* Segments */}
      <div className="absolute inset-0">
        {(Object.keys(SEGMENTS) as Array<keyof typeof SEGMENTS>).map((key) => (
          <div
            key={key}
            className={`absolute ${
              SEGMENT_POSITIONS[key]
            } w-[280px] transition-all duration-300 ease-out
      ${
        activeSegment === key
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none translate-y-2"
      }
    `}>
            <h3 className="text-white text-[20px] text-5xl font-extrabold font-semibold mb-2">
              {SEGMENTS[key].title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {SEGMENTS[key].description}
            </p>
          </div>
        ))}

        {/* Segment 1 – top-left */}
        <div
          className="absolute top-[-1%] left-[-1%] w-[52%] h-[52%] z-10 group "
          onMouseEnter={() => handleEnter("continuity")}
          onMouseLeave={handleLeave}>
          <svg
            viewBox="0 0 217 217"
            preserveAspectRatio="none"
            className="w-full h-full scale-[1.03] origin-bottom-right transition-transform duration-700 ease-out group-hover:scale-[1.3]">
            {/* Filled segment */}
            <path
              d="M0.0273467 219.878C-0.43477 191.465 4.70392 163.24 15.15 136.813C25.5961 110.386 41.1451 86.2758 60.9091 65.8582C80.6731 45.4407 104.265 29.1159 130.338 17.8159C156.411 6.51593 184.455 0.462055 212.867 -5.837e-05L216.386 216.359L0.0273467 219.878Z"
              fill="url(#g1)"
            />

            {/* 🔥 Hover dashed border */}
            <path
              d="M0.0273467 219.878C-0.43477 191.465 4.70392 163.24 15.15 136.813C25.5961 110.386 41.1451 86.2758 60.9091 65.8582C80.6731 45.4407 104.265 29.1159 130.338 17.8159C156.411 6.51593 184.455 0.462055 212.867 -5.837e-05L216.386 216.359L0.0273467 219.878Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="6 6"
              transform="scale(1.08)"
              vectorEffect="non-scaling-stroke"
              style={{ transformOrigin: "108.5px 108.5px" }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Curved text */}
            <path
              id="curveText"
              d="M62 180 C62 150, 100 65, 190 60"
              fill="none"
            />

            <text
              fill="white"
              fontSize="20"
              fontWeight="700"
              fontFamily="Poppins, sans-serif">
              <textPath href="#curveText" startOffset="48%" textAnchor="middle">
                Continuity
              </textPath>
            </text>

            <defs>
              <linearGradient id="g1" x1="203" y1="16" x2="40" y2="179">
                <stop stopColor="#040B10" />
                <stop offset="1" stopColor="#0B1C45" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Segment 2 – top-right */}
        <div
          className="absolute top-[-1%] right-[-1%] w-[52%] h-[52%] z-10"
          onMouseEnter={() => handleEnter("unified")}
          onMouseLeave={handleLeave}>
          <svg
            viewBox="0 0 218 219"
            className="w-full h-full scale-[1.02] origin-bottom-left transition-transform duration-700 ease-out hover:scale-[1.3]"
            preserveAspectRatio="none">
            {/* Segment shape */}
            <path
              d="M-0.00118755 0.0106292C28.4138 -0.271821 56.6062 5.04524 82.9663 15.6582C109.326 26.2712 133.338 41.9723 153.63 61.865C173.922 81.7578 190.098 105.453 201.233 131.596C212.367 157.74 218.244 185.822 218.526 214.237L2.14962 216.387L-0.00118755 0.0106292Z"
              fill="white"
            />

            {/* 🔥 Text curve path */}
            <path
              id="curveText2"
              d="M40 40 C30 60, 110 50, 160 160"
              fill="none"
            />

            {/* Curved text */}
            <text
              fill="#0B1C45"
              fontSize="20"
              fontWeight="800"
              fontFamily="Poppins, sans-serif"
              letterSpacing="1">
              <textPath
                href="#curveText2"
                startOffset="62%"
                textAnchor="middle">
                Unified
              </textPath>
            </text>
          </svg>
        </div>

        {/* Segment 3 – bottom-right */}
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 z-10 "
          onMouseEnter={() => handleEnter("vision")}
          onMouseLeave={handleLeave}>
          <svg
            viewBox="0 0 216 217"
            className="w-full h-full scale-[1.05] origin-top-right transition-transform duration-700 ease-out hover:scale-[1.3]"
            preserveAspectRatio="none">
            {/* Segment shape */}
            <path
              d="M221.131 216.334C192.721 216.964 164.466 211.992 137.978 201.702C111.49 191.411 87.2887 176.005 66.755 156.362C46.2213 136.718 29.7577 113.223 18.3041 87.217C6.85063 61.211 0.63152 33.2038 0.00189737 4.79438L216.336 -0.000123503L221.131 216.334Z"
              fill="white"
            />

            {/* 🔥 Curved text path */}
            <path
              id="curveTextBottomLeft"
              d="M185 155 C130 140, 110 160, 50 40"
              fill="none"
            />

            {/* Curved text */}
            <text
              fill="#0B1C45"
              fontSize="20"
              fontWeight="800"
              fontFamily="Poppins, sans-serif"
              letterSpacing="1">
              <textPath
                href="#curveTextBottomLeft"
                startOffset="50%"
                textAnchor="middle">
                Vision
              </textPath>
            </text>
          </svg>
        </div>

        {/* Segment 4 – bottom-left */}
        <div
          className="absolute bottom-[-1%] right-[-1%] w-[52%] h-[52%] z-10 hover:z-10 pointer-events-auto"
          onMouseEnter={() => handleEnter("assurance")}
          onMouseLeave={handleLeave}>
          <svg
            viewBox="0 0 217 217"
            className="w-full h-full scale-[1.03] origin-top-left transition-transform duration-700 ease-out hover:scale-[1.3]"
            preserveAspectRatio="none">
            {/* Segment shape */}
            <path
              d="M216.379 0.000192423C216.635 28.4154 211.292 56.6029 200.655 82.9533C190.018 109.304 174.295 133.301 154.383 153.575C134.472 173.849 110.763 190.002 84.6084 201.113C58.4542 212.224 30.3677 218.075 1.9525 218.331L0.000217099 1.95248L216.379 0.000192423Z"
              fill="url(#g2)"
            />

            {/* 🔥 Text curve path */}
            <path
              id="curveText3"
              d="M150 20 C150 80, 120 130, 0 185"
              fill="none"
            />

            {/* Curved text */}
            <text
              fill="white"
              fontSize="20"
              fontWeight="800"
              fontFamily="Poppins, sans-serif"
              letterSpacing="1">
              <textPath
                href="#curveText3"
                startOffset="42%"
                textAnchor="middle">
                Assurance
              </textPath>
            </text>

            <defs>
              <linearGradient id="g2" x1="11" y1="201" x2="175" y2="40">
                <stop stopColor="#040B10" />
                <stop offset="1" stopColor="#0B1C45" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhyHawkstackSvg;

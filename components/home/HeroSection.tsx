"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Digital Transformation Built on Enterprise Platforms",
    desc: "We modernize applications and automate operations for enterprises, while HawkStack builds secure, scalable cloud-native Kubernetes platforms.",
  },
  {
    title: "Enterprise-Grade Platform Services",
    desc: "HawkStack modernizes applications, automates operations, and delivers secure, cloud-native Kubernetes platforms that scale with your enterprise business.",
  },
  {
    title: "Digital Futures Engineered with modern platform",
    desc: "HawkStack modernizes enterprise applications, automates operations, and builds secure, scalable cloud-native Kubernetes platforms.",
  },
];

export default function EnterpriseSection() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[568px]  bg-[#0B1F4B] text-white overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="relative z-20  pt-[134px] pl-[38px] ">
        <div className="relative w-1/2 ">
          <div className="flex items-start gap-6">
            {/* LEFT ARROWS */}
            <div className="flex flex-col items-center gap-[80px] pt-3">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-white/40 
            flex items-center justify-center 
            hover:bg-white/10 hover:border-white/70 
            transition-all duration-300">
                ↑
              </button>

              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-white/40 
            flex items-center justify-center 
            hover:bg-white/10 hover:border-white/70 
            transition-all duration-300">
                ↓
              </button>
            </div>

            {/* CONTENT */}
            <div className="relative w-full ">
              {/* SLIDES */}
              <div className="relative h-[180px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`
                absolute left-0 top-0 transition-all duration-900
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 pointer-events-none"
                }
              `}>
                    <h2 className="text-[40px] font-normal leading-tight mb-6  max-w-[540px]">
                      {slide.title}
                    </h2>

                    <p className="text-[14px] text-white/80 max-w-[540px]">
                      {slide.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="flex items-center  gap-5 mt-[62px] ">
                <button
                  className="bg-blue-600 hover:bg-blue-500 transition
                   px-5 py-2.5 rounded-full font-normal text-white
                   flex items-center gap-2 shadow-[0_7.57px_22.72px_0_rgba(108,99,255,0.35)]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.73438 2.36621L15.778 9.46566L4.73438 16.5651V2.36621Z"
                      stroke="white"
                      strokeWidth="1.57765"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Schedule a Consultation
                </button>

                <button
                  className="bg-white text-blue-700 px-5 py-2.5 rounded-full
                   font-normal hover:bg-gray-100 transition
                   flex items-center gap-2 shadow-[0_7.57px_22.72px_0_rgba(108,99,255,0.35)]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.94922 9.46582H14.9928"
                      stroke="#6C63FF"
                      strokeWidth="1.57765"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.46875 3.94434L14.9905 9.46613L9.46875 14.9879"
                      stroke="#6C63FF"
                      strokeWidth="1.57765"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  View Our Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute top-0 right-0 h-[680px] w-[65vw] z-0 overflow-hidden hero-mask">
        <img
          src="/images/hero-visual.webp"
          alt="Enterprise Platform"
          className="w-full h-full object-cover "
        />
        {/* box */}

        {/* BLUR OVERLAY (LEFT PART OF IMAGE) */}
        <div className="absolute top-0 left-0 h-full w-[35%]  z-10 bg-gradient-to-r from-[#0B1F4B]/100 via-[#0B1F4B]/80 to-transparent backdrop-blur-[1px] pointer-events-none" />
      </div>
    </section>
  );
}

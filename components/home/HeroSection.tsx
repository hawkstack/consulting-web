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
    <section className="relative h-[560px] md:h-[568px] lg:h-[568px] bg-[#0B1F4B] text-white overflow-hidden font-lexend">

      {/* ===== MOBILE HERO IMAGE (ONLY MOBILE) ===== */}
      <div className="relative flex justify-center pt-10 md:hidden">
        <img
          src="/images/hero-mobile-visual.webp"
          alt="Mobile Platform"
          className="w-[280px]"
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 pt-10 pb-10 px-4 md:pt-[134px] md:pl-[38px] lg:pt-[134px] lg:pl-[38px]">
        <div className="relative w-full md:w-1/2 lg:w-1/2">
          <div className="flex items-start gap-6">

            {/* ===== ARROWS ===== */}
            <div className="flex flex-col items-center gap-[60px] pt-3">
              <button
                onClick={prevSlide}
                className="w-5 h-5 rounded-full border border-white/40 
                flex items-center justify-center 
                hover:bg-white/10 transition"
              >
                ↑
              </button>

              <button
                onClick={nextSlide}
                className="w-5 h-5 rounded-full border border-white/40 
                flex items-center justify-center 
                hover:bg-white/10 transition"
              >
                ↓
              </button>
            </div>

            {/* ===== TEXT CONTENT ===== */}
            <div className="relative w-full">

              {/* SLIDES */}
              <div className="relative h-[180px] md:h-[180px] lg:h-[180px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute left-0 top-0 transition-all duration-700
                    ${
                      i === active
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                  >
                    <h2 className="text-[18px] md:text-[40px] lg:text-[40px] leading-tight mb-4 max-w-[540px]">
                      {slide.title}
                    </h2>

                    <p className="text-[14px] text-white/80 max-w-[540px]">
                      {slide.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* ===== CTA BUTTONS ===== */}
              <div className="flex flex-row ml-[-20px] items-center gap-4 w-full md:mt-[62px] md:pl-0 lg:mt-[62px] lg:pl-0">
                <button
                  className="w-1/2 bg-blue-600 hover:bg-blue-500 transition
                  px-2 py-2 rounded-full
                  flex items-center justify-center gap-2
                  text-[10px] md:px-5 md:py-2.5 md:text-[14px]
                  lg:px-5 lg:py-2.5 lg:text-[14px]
                  whitespace-nowrap overflow-hidden"
                >
                  ▶ Schedule a Consultation
                </button>

                <button
                  className="w-1/2 bg-white text-blue-700
                  px-2 py-2 rounded-full
                  flex items-center justify-center gap-2
                  text-[11px] md:px-5 md:py-2.5 md:text-[14px]
                  lg:px-5 lg:py-2.5 lg:text-[14px]
                  hover:bg-gray-100 transition
                  whitespace-nowrap overflow-hidden"
                >
                  → View Our Solutions
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP + TABLET RIGHT IMAGE ===== */}
      <div className="hidden md:block absolute top-0 right-0 h-[680px] w-[65vw] z-0 overflow-hidden">
        <img
          src="/images/hero-visual.webp"
          alt="Enterprise Platform"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 h-full w-[35%]
          bg-gradient-to-r from-[#0B1F4B]/100 via-[#0B1F4B]/80 to-transparent"
        />
      </div>
    </section>
  );
}


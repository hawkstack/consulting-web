"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp, ArrowDown } from "lucide-react";

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
    <section className="relative h-[560px] md:h-[568px] lg:h-[568px] bg-[#0B1F4B] text-white overflow-hidden">
      {/* ===== MOBILE HERO IMAGE (ONLY MOBILE) ===== */}
      <div className="relative flex justify-center pt-10 md:hidden">
        <Image
          src="/images/hero-mobile-visual.webp"
          alt="Mobile Platform"
          width = {280}
          height = {280}
          className="object-cover"
        />
      </div>
      {/* ===== CONTENT ===== */}
      <div className="relative z-20 pt-10 pb-10 px-4 md:pt-[134px] md:pl-[38px] lg:pt-[134px] lg:pl-[38px]">
        <div className="relative w-full md:w-1/2 lg:w-1/2">
          <div className="flex items-start gap-6">
            {/* ===== ARROWS ===== */}
            <div className="flex flex-col items-center gap-[50px] pt-[12px] md:gap-[75px] md:pt-[16px] lg:gap-[80px] lg:pt-[20px]">
              <button onClick={prevSlide}
                className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px] md:text-[12px] hover:bg-white/10 transition">
                  <ArrowUp className="w-2.5 h-2.5 md:w-3 md:h-3"
                    strokeWidth={2} />
              </button>

              <button onClick={nextSlide}
                 className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px] md:text-[12px] hover:bg-white/10 transition">
                  <ArrowDown className="w-2.5 h-2.5 md:w-3 md:h-3"
                    strokeWidth={2} />
              </button>
            </div>
            {/* ===== TEXT CONTENT ===== */}
            <div className="relative w-full">
              {/* SLIDES */}
              <div className="relative h-[160px] md:h-[160px] lg:h-[160px]">
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
                    <h2 className="font-lexend text-[18px] leading-[26px] md:text-[32px] md:leading-[42px] lg:text-[40px] lg:leading-[50px] tracking-normal mb-4 max-w-[540px]">
                      {slide.title}
                    </h2>

                    <p className="font-poppins font-normal text-[13px] leading-[19.5px] md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[21px] tracking-[-0.03em] text-white/80 max-w-[540px]">
                      {slide.desc}
                    </p>
                  </div>
                ))}
              </div>
              {/* ===== CTA BUTTONS ===== */}
              <div className="flex flex-row ml-[-20px] items-center gap-4 w-full md:mt-[62px] md:pl-0 lg:mt-[62px] lg:pl-0">
                <button
                  className=" bg-blue-600 hover:bg-blue-500 transition px-3 py-2 rounded-full flex items-center justify-center 
                  gap-2 text-[10px] md:px-5 md:py-2.5 md:text-[14px] lg:px-6 lg:py-2.5 lg:text-[14px] whitespace-nowrap overflow-hidden">
                  ▶ Schedule a Consultation
                </button>

                <button
                  className=" bg-white text-blue-700 px-4 py-2 rounded-full flex items-center justify-center gap-2 text-[11px] 
                  md:px-5 md:py-2.5 md:text-[14px] lg:px-6 lg:py-2.5 lg:text-[14px] hover:bg-gray-100 transition whitespace-nowrap overflow-hidden">
                  → View Our Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP + TABLET RIGHT IMAGE ===== */}
      <div className="hidden md:block absolute top-0 right-0 h-[680px] w-[65vw] z-0 overflow-hidden">
        <Image
          src="/images/hero-visual.webp"
          alt="Enterprise Platform"
          fill
          className="object-cover"
        />
        <div
          className="absolute top-0 left-0 h-full w-[35%]
          bg-gradient-to-r from-[#0B1F4B]/100 via-[#0B1F4B]/80 to-transparent"
        />
      </div>
    </section>
  );
}


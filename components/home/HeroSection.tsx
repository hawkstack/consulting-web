"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Hero } from "@/types/home/home";

type HeroSectionProps = {
  data: Hero;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [active, setActive] = useState(0);
  const { slides } = data;

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = () => {
    const section = document.getElementById("oursolution-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[450px] xl:h-[650px] overflow-hidden bg-[#020B1C] font-lexend flex flex-col">
      {/* Desktop Video Layer */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-right md:object-bottom"
        >
          <source src={data.bgVideo} type="video/mp4" />
        </video>       
      </div>

      {/* Mobile Video Layer */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0 bg-[#020B1C]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
        >
          <source src={data.bg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,28,0)_0%,rgba(2,11,28,0.6)_50%,rgba(2,11,28,0.95)_75%,#020B1C_90%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 h-full w-full px-5 md:px-12 lg:pl-15 flex flex-col justify-end pb-10 md:justify-center md:pb-0">
        <div className="flex flex-row items-start gap-3 md:gap-5 lg:gap-8">
          
          {/* Navigation Icons */}
          <div className="flex flex-col gap-6 md:gap-9 xl:gap-15 mt-1 xl:mt-6">
            <button 
              onClick={prevSlide} 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/10 transition-all shrink-0" 
              dangerouslySetInnerHTML={{ __html: data.icons[0] }} 
            />
            <button 
              onClick={nextSlide} 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/10 transition-all shrink-0" 
              dangerouslySetInnerHTML={{ __html: data.icons[1] }} 
            />
          </div>

          {/* Text & Buttons */}
          <div className="flex flex-col w-full max-w-[320px] md:max-w-[400px] xl:max-w-[650px]">
            <div className="relative min-h-[150px] md:min-h-[140px] xl:min-h-[200px]">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <h1 className="text-[22px] md:text-[28px] xl:text-[46px] font-medium text-white mb-2 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-[12px] md:text-[12px] xl:text-[18px] text-[#DBEAFE] font-normal leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>    
        </div>
        
         <div className="flex flex-row items-center gap-2 px-2 lg:pl-18 md:pl-15 lg:gap-4 md:mt-0 xl:mt-5">
          <Link href="/get-started">
            <button className="flex items-center gap-2 px-3 py-3 md:px-4 xl:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#219E5C] to-[#122FAD] text-white text-[11px] md:text-[12px] xl:text-[15px] font-medium whitespace-nowrap">
              <svg width="9" height="12" viewBox="0 0 12 16" fill="none"><path d="M0.789062 0.789062L10.7692 7.88851L0.789062 14.988L0.789062 0.789062Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Schedule a Consultation
            </button>
          </Link>
          
          <button 
            onClick={handleScroll}
            className="flex items-center gap-2 px-3 py-3 md:px-4 xl:px-8 md:py-3 rounded-full bg-[#1331AD] text-white text-[11px] md:text-[12px] xl:text-[15px] font-medium whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.33203 8H12.6654" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3.33203L12.6667 7.9987L8 12.6654" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              View Our solutions
            </span> 
          </button>
        </div>
      </div>
    </section>
  );
}
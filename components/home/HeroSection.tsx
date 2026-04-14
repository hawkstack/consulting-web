"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Hero } from "@/types/home/home";

interface HeroSectionProps {
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
    <section className="relative w-full h-[560px] md:h-[600px] lg:h-[650px] overflow-hidden bg-[#020B1C] font-lexend">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-bottom"
        >
          <source src={data.bgVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B1C] via-[#020B1C]/80 to-transparent z-10" />
      </div>

      <div className="absolute z-20 h-full w-full px-6 md:px-12 lg:pl-15 flex flex-col justify-center">
        <div className="flex items-start gap-6 md:gap-10 lg:gap-8">
          
          <div className="flex flex-col md:gap-10 xl:gap-15 md:mt-3 lg:mt-6 xl:mt-10">
            <button onClick={prevSlide} className="w-[48px] h-[48px] rounded-full border border-white/40 flex items-center justify-center bg-white/10 transition-all" dangerouslySetInnerHTML={{ __html: data.icons[0] }} />
            <button onClick={nextSlide} className="w-[48px] h-[48px]  rounded-full border border-white/40 flex items-center justify-center bg-white/10 transition-all" dangerouslySetInnerHTML={{ __html: data.icons[1] }} />
          </div>

          <div className="flex flex-col md:w-[500px] xl:w-[650px]">
            <div className="relative min-h-[160px] lg:min-h-[200px]">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <h1 className="text-[18px] md:text-[28px] lg:text-[36px] xl:text-[46px] font-medium text-white">
                    {slide.title}
                  </h1>
                  
                  <p className="text-[14px] md:text-[16px] xl:text-[18px] text-[#DBEAFE] font-normal leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-3 xl:mt-5">
              <Link href="/get-started">
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#219E5C] to-[#122FAD] text-white text-[15px] font-medium">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.789062 0.789062L10.7692 7.88851L0.789062 14.988L0.789062 0.789062Z" stroke="white" strokeWidth="1.57765" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Schedule a Consultation
                </button>
              </Link>
              <button 
              onClick={handleScroll}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#1331AD] text-white text-[15px] font-medium">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33203 8H12.6654" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3.33203L12.6667 7.9987L8 12.6654" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span> 
                View Our solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
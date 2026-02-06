import { deliverItems } from "@/constants/deliverItems";
import Image from "next/image";
import { JSX } from "react";

export default function WhatWeDeliver(): JSX.Element {
  return (
    <section className="lg:min-h-[840px] pt-10 pb-10 bg-gradient-to-b from-[#000000] to-[#04092E]">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2 className="font-lexend text-[28px] md:text-[32px] lg:text-[40px] font-normal leading-[150%] tracking-[-0.03em] text-[#FFFFFF] mb-2">
          What We Deliver
        </h2>

        <p className="font-lexend text-[14px] md:text-[15px] lg:text-[16px] leading-[125%] max-w-[720px] mx-auto text-[#FFFFFF] mt-2 mb-12">
          End-to-end cloud and DevOps solutions tailored for modern enterprise
          needs.
        </p>
      </div>

      {/* ================= MOBILE : ONLY ONE CARD ================= */}
      <div className="md:hidden max-w-[1300px] mx-auto px-4">
        {/* COMMON WIDTH WRAPPER */}
        <div className="mx-auto w-[370px] max-w-full">
          {/* ===== CARD ===== */}
          {deliverItems.slice(0, 1).map((item, index) => (
            <div
              key={index}
              className="w-full rounded-[16px] p-6 bg-gradient-to-b from-[#0F172B]/50 to-[#1D293D]/30 border-[1.64px] border-[#2B7FFF]/40 backdrop-blur-md flex flex-col shadow-[0_6.56px_9.84px_-6.56px_rgba(43,127,255,0.2)]"
            >
              {/* ICON */}
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[#1D293D]/50 border border-[#314158]/50 flex items-center justify-center mb-5">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* TITLE */}
              <h3 className="font-lexend text-[20px] font-medium text-[#FFFFFF] mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-lexend text-[14px] leading-[20px] text-[#90A1B9] mb-4">
                {item.desc}
              </p>

              {/* LINE + KNOW MORE */}
              <div>
                <div className="h-[1px] bg-[#90A1B9] mb-3" />
                <div className="flex items-center justify-between">
                  <span className="font-lexend text-[16px] text-[#FFFFFF]">
                    Know more
                  </span>
                  <span className="text-[28px] text-[#2B7FFF] leading-none">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* ===== CTA ===== */}
          <div className="mt-10">
            <div className="w-full h-[72px] rounded-[26px] bg-gradient-to-b from-[#0F172B]/50 to-[#1D293D]/30 border-[1.64px] border-[#2B7FFF]/40 flex items-center justify-between px-6 shadow-[0_6.56px_9.84px_-6.56px_rgba(43,127,255,0.2)]">
              <span className="font-lexend text-[20px] text-[#FFFFFF]">
                Know more
              </span>
              <span className="text-[28px] text-[#2B7FFF] leading-none">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TABLET + DESKTOP GRID ================= */}
      <div className="hidden md:grid max-w-[1300px] mx-auto grid-cols-3 lg:grid-cols-3 gap-x-6 md:gap-y-[50px] lg:gap-y-[72px] px-4">
        {deliverItems.map((item, index) => (
          <div
            key={index}
            className="group w-full xl:w-[406px] h-auto lg:h-[260px] rounded-[16px] p-6 lg:p-8 bg-gradient-to-b from-[#0F172B] to-[#1D293D] border-[1px] border-[#2B7FFF]/40 backdrop-blur-md transition-transform duration-300 ease-in-out xl:hover:scale-y-[1.10] origin-top"
          >
            <div className="transition-transform duration-300 ease-in-out xl:group-hover:scale-y-[0.877] origin-top  xl:-translate-x-[30px]">
              {/* ICON */}
              <div className="w-[56px] h-[56px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-[10px] bg-[#1D293D]/50 border border-[#314158]/50 flex items-center justify-center mb-6 xl:ml-[20]">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="transform transition-transform duration-300 lg:translate-y-14 xl:translate-y-14 xl:group-hover:translate-y-0">
                <h3 className="font-lexend text-[15px] lg:text-[22px] font-medium text-[#FFFFFF] mb-2 xl:mx-[25px] line-clamp-1">
                  {item.title}
                </h3>

                <p className="font-lexend text-[10px] lg:text-[16px] text-[#90A1B9] xl:mx-[25px] line-clamp-1 xl:group-hover:line-clamp-none transition-all duration-300">
                  {item.desc}
                </p>
              </div>

              {/* FOOTER – desktop only */}
              <div className="hidden xl:block mt-6 w-full lg:w-[342px] lg:mx-[25px] opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-[1px] bg-[#90A1B9] mb-4" />
                <div className="flex items-center justify-between">
                  <span className="font-lexend text-[15px] lg:text-[16px] text-[#FFFFFF]">
                    Know more
                  </span>
                  <span className="text-[22px] lg:text-[32px] text-[#2E85FF]">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

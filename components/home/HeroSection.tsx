import Image from "next/image";
import { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative h-[568px] bg-gradient-to-r from-[#081b3d] via-[#0b1f4d] to-[#091d44]">
      <div className="max-w-5xl mx-18 h-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-">
        {/* LEFT CONTENT */}
        <div className="text-white z-10">
          <h1 className="font-lexend text-[40px] leading-[50px] font-normal tracking-normal mb-5">
            <span className="block">Digital Transformation Built</span>
            <span className="block">on Enterprise Platforms</span>
          </h1>

          <p className="font-poppins text-[14px] leading-[1.5] tracking-[-0.03em] font-normal mb-10">
            <span className="block">
              HawkStack modernizes enterprise applications, automates
              operations,
            </span>
            <span className="block">
              and builds secure, scalable cloud-native Kubernetes platforms.
            </span>
          </p>

          <div className="flex gap-4">
            <button className="w-[265.99px] h-[51.12px] flex items-center justify-center gap-[7.57px] rounded-full bg-[#5272FF] px-[30.29px] py-[14.2px] text-white shadow-[0_7.57px_22.72px_0_rgba(108,99,255,0.35)]">
              ▶ Schedule a Consultation
            </button>

            <button className="rounded-full bg-white px-6 py-3 font-medium text-indigo-600 shadow-[0_7.57px_22.72px_0_rgba(108,99,255,0.35)]">
              → View Our Solutions
            </button>
          </div>
        </div>
        {/* LEFT VERTICAL NAV (UP / DOWN) */}
        <div className="absolute left-10 top-62 -translate-y-1/2 z-30 flex flex-col items-center gap-18">
          <button
            className="w-6 h-6 rounded-full border border-white
            flex items-center justify-center text-white ">
            ↑
          </button>

          <button
            className="w-6 h-6 rounded-full border border-white
            flex items-center justify-center text-white">
            ↓
          </button>
        </div>
        {/* RIGHT IMAGE (CLIPPED & SAFE) */}
        <div className="relative  h-full w-[825px] overflow-hidden">
          <img
            src="/hero-visual.png"
            alt="Enterprise Platform"
            className="h-[662px] w-[860px] object-cover scale-110"
          />

          {/* GRADIENT FADE */}
          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#0B1F4B] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

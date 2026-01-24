"use client";
import React from "react";
import Image from "next/image";

const YourInfrastructure: React.FC = () => {
  return (
    <section className="w-full  md:w-full bg-[url('/images/openshift/infrastructure-bg.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-[40px] pt-[38px] pb-[25px] md:px-[40px] md:py-[50px] font-lexend">
      {/* Card */}
      <div className="w-full  bg-white rounded-2xl border-3 border-[#DAD3D3CC] shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-5 md:p-8 md:grid md:grid-cols-[1.2fr_1fr] md:gap-8 lg:gap-0 md:items-center lg:w-[1200px] ">
        {/* LEFT: Content */}
        <div>
          {/* Title */}
          <h2 className="text-[15px] md:text-[20px] font-semibold text-black leading-snug mb-3 whitespace-normal md:whitespace-nowrap lg:text-[28px] lg:font-semibold ">
            Ready to Modernize Your Infrastructure?
          </h2>

          {/* Description */}
          <p className="text-[8px] md:text-[10px] font-light text-black/70 leading-relaxed mb-5 lg:text-[15px] lg:font-[300px]">
            Partner with HawkStack to design, migrate, and optimize cloud-native
            platforms. We help you streamline operations, secure workloads, and
            scale faster with proven DevOps, Kubernetes, and OpenShift
            expertise.
          </p>

          {/* Primary CTA */}
          <button className="w-[120px] md:w-[160px] lg:w-[290px] flex items-center justify-center gap-1 bg-[#5b6cff] text-white text-[8px] font-semibold py-3 rounded-full shadow-[0_6px_16px_rgba(91,108,255,0.45)] mb-3 lg:text-[18px]">
            <svg
              width="7"
              height="9"
              viewBox="0 0 7 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[9px] h-[9px] lg:w-[16px] lg:h-[16px]">
              <path
                d="M0.789062 0.788818L6.03906 4.16382L0.789062 7.53882V0.788818Z"
                stroke="white"
                strokeWidth="1.57765"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Schedule a Consultation
          </button>

          {/* Secondary CTA */}
          <button className="w-[120px] md:w-[160px] lg:w-[290px] flex items-center justify-center gap-2 bg-white text-[#5b6cff] text-[8px] font-semibold py-3 rounded-full border border-[#e2e6ff] shadow-sm lg:text-[18px]">
            <svg
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[9px] h-[9px] lg:w-[16px] lg:h-[16px]">
              <path
                d="M1.87695 4.50024H7.12695"
                stroke="#6C63FF"
                strokeWidth="1.57765"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 1.87524L7.125 4.50024L4.5 7.12524"
                stroke="#6C63FF"
                strokeWidth="1.57765"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View Our solutions
          </button>
        </div>

        {/* RIGHT: Illustration (Tablet only) */}
        <div className="relative hidden md:flex items-center justify-center w-[600px] lg:h-[300px] mx-auto">
          <Image
            src="/images/openshift/cta/infrastructure-icon.webp"
            alt="Infrastructure"
            width={194}
            height={194}
            className="absolute w-[145px] right-[466px] z-10 lg:w-[194px] lg:left-52"
          />

          <div
            className="absolute left-[-66px] top-[22px] lg:left-[132px] lg:top-[216px]"
            style={{
              animation: "node1DiagonalLeftUp 5s ease-in-out infinite",
            }}>
            <Image
              src="/images/openshift/cta/node1-icon.webp"
              alt=""
              width={90}
              height={90}
              className="w-[67px] lg:w-[90px] lg:-translate-y-1/2"
            />
          </div>

          <div
            className="absolute left-[133px] top-[13px] lg:left-[402px] lg:top-[201px]"
            style={{ animation: "nodeDiagonalLeft 5s ease-in-out infinite" }}>
            <Image
              src="/images/openshift/cta/node2-icon.webp"
              alt=""
              width={74}
              height={74}
              className="w-[58px] lg:w-[74px] lg:-translate-y-1/2"
            />
          </div>

          <div
            className="absolute top-[-42px] left-[97px] lg:top-[83px] lg:left-[404px]"
            style={{ animation: "floatRight 5s ease-in-out infinite" }}>
            <Image
              src="/images/openshift/cta/cloud-icon.webp"
              alt=""
              width={120}
              height={120}
              className="w-[78px] lg:w-[120px] lg:-translate-x-1/2"
            />
          </div>

          <div
            className="absolute left-[-67px] top-[-27px] lg:left-[166px] lg:top-[97px]"
            style={{ animation: "floatDiagonalUp 5s ease-in-out infinite" }}>
            <Image
              src="/images/openshift/cta/database-icon.webp"
              alt=""
              width={80}
              height={80}
              className="w-[50px] lg:w-[80px] lg:-translate-x-1/2"
            />
          </div>

          <div
            className="absolute left-[17px] top-[88px] lg:top-[264px] lg:left-[296px]"
            style={{ animation: "floatDiagonalUp 5s ease-in-out infinite" }}>
            <Image
              src="/images/openshift/cta/cube-icon.webp"
              alt=""
              width={84}
              height={84}
              className="w-[55px] lg:w-[84px] lg:-translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourInfrastructure;

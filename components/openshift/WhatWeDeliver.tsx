"use client";

import DiscussRedHat from "./Form";

export default function WhatWeDeliver() {
  return (
    <section className="bg-white px-4 pt-6 md:pt-6 font-lexend overflow-hidden">
      <div className="mx-auto max-w-7xl md:flex md:items-start md:gap-16">
        {/* LEFT COLUMN */}
        <div className=" lg:w-[600px] md:w-[300px]">
          {/* Title + Description */}
          <div className="mb-8 lg:mb-15">
            {/* Description hidden on mobile */}
            <p className="hidden md:block  mb-1max-w-xl text-[12px] text-black text-justify lg:text-[16px]">
              Rapidly validate Red Hat OpenShift and build a production-ready,
              enterprise-grade container platform on Kubernetes. Our approach
              ensures a secure, scalable, and resilient foundation—designed,
              deployed, and enabled by Red Hat–certified experts—so your teams
              can confidently accelerate application modernization, streamline
              operations, and achieve faster time-to-value.
            </p>
            <h2 className="text-3xl mt-2 lg:mt-6 font-bold text-black text-center  animate-[fadeUp_0.8s_ease-out_forwards] lg:text-[32px]">
              What we deliver
            </h2>
          </div>

          {/* Diamonds */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm h-[380px]">
              {/* Soft background diamonds */}
              <div
                className="absolute top-40 left-10 w-[100px] h-[100px] lg:absolute lg:left-28 rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl blur-[8px]
                animate-[floatSlow_5s_ease-in-out_infinite]"
              />

              <div
                className="absolute top-[190px] right-[39px] w-[100px] h-[100px]  lg:absolute lg:left-86 rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl blur-[8px]
                 animate-[floatDiagonal_5s_ease-in-out_infinite]"
              />

              {/* Center Dark Diamond */}
              <div
                className="absolute inset-0 left-4 flex items-center justify-center z-30 md:absolute md:right-[-50px]
                animate-[fadeUp_0.8s_ease-out_forwards_0.2s] lg:absolute lg:left-50 md:absolute md:left-6 md:top-[-10px]">
                <div
                  className="w-[100px] h-[100px] lg:w-[140px]  lg:h-[140px] rotate-45 bg-gradient-to-br from-[#0b1e3a] to-[#132f5e] rounded-3xl flex items-center justify-center
                  animate-[floatSlow_10s_ease-in-out_infinite]">
                  <p className="-rotate-45 text-white text-[10px] font-semibold text-center leading-snug px-4 lg:text-[14px]">
                    Cluster Design & Setup
                  </p>
                </div>
              </div>

              {/* Top Diamond */}
              <div
                className="absolute top-[43px] left-[152px]   -translate-x-1/2 z-20
                animate-[fadeUp_0.9s_ease-out_forwards_0.6s] ">
                <div
                  className="w-[100px] h-[100px] lg:w-[140px]  lg:h-[140px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                  animate-[float_3s_ease-in-out_infinite] lg:absolute lg:left-[30px] lg:top-[-60px] md:absolute md:top-[-10px] md:left-[-30px]">
                  <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3 lg:text-[14px]">
                    OpenShift
                    <br />
                    Virtualization
                    <br />
                    Enablement
                  </p>
                </div>
              </div>

              {/* Right Diamond */}
              <div
                className="absolute left-[236px] top-[151px]  -translate-y-1/2 z-20 md:absolute md:left-50 lg:absolute lg:left-64
                animate-[fadeUp_0.8s_ease-out_forwards_0.45s]">
                <div
                  className="w-[100px] h-[100px] lg:w-[140px]  lg:h-[140px]  rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                  animate-[float_4s_ease-in-out_infinite_0.2s] lg:absolute lg:left-[152px] lg:top-[-80px] md:absolute md:left-8 md:top-[-60]">
                  <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3 lg:text-[14px] ">
                    Networking & Storage Configuration
                  </p>
                </div>
              </div>

              {/* Left Diamond */}
              <div
                className="absolute left-[1px] top-[46%]  -translate-y-1/2 z-20
                animate-[fadeUp_0.8s_ease-out_forwards_0.6s] ">
                <div
                  className="w-[100px] h-[100px] lg:w-[140px]  lg:h-[140px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                  animate-[float_3s_ease-in-out_infinite_0.2s] lg:absolute lg:left-5 lg:top-[-80] ">
                  <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3 lg:text-[14px]">
                    Day-2 Operations Readiness
                  </p>
                </div>
              </div>

              {/* Accent red diamonds */}
              <div
                className="absolute bottom-[71px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md
                animate-[float_3s_ease-in-out_infinite] lg:absolute lg:bottom-10 "
              />

              <div
                className="absolute top-10 left-14 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md opacity-80
                animate-[floatSlow_4s_ease-in-out_infinite] lg:absolute lg:top-1"
              />

              <div
                className="absolute top-20 left-1 w-[25px] h-[25px] bg-[#132f5e] rotate-45 rounded-md opacity-80 blur-sm
                animate-[floatSlow_4s_ease-in-out_infinite] lg:absolute lg:top-1 lg:absolute lg:left-0 lg:top-15 md:absolute md:top-20 md:left-[10]"
              />
            </div>
          </div>
        </div>
        <div className=" hidden md:block lg:absolute lg:top-146 lg:right-35 md:absolute md:right-0 md:top-140  " >
         <DiscussRedHat source="openshift" />
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
}

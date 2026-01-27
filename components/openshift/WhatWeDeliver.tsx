"use client";

export default function WhatWeDeliver() {
  return (
    <section className="bg-white px-4 pt-10 font-lexend overflow-hidden">
      {/* 🔥 NEW layout wrapper — activates ONLY at md */}
      <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
        {/* LEFT SIDE — diamonds (mobile unchanged) */}
        <div className="mb-10 md:mb-6 ">
          <h2 className="text-3xl font-bold text-black text-center md:text-left animate-[fadeUp_0.8s_ease-out_forwards]">
            What we deliver
          </h2>

          <p className="hidden md:block mt-4 max-w-xl text-black">
            Rapidly validate Red Hat OpenShift and build a production-ready,
            enterprise-grade container platform on Kubernetes. Our approach
            ensures a secure, scalable, and resilient foundation—designed,
            deployed, and enabled by Red Hat–certified experts—so your teams can
            confidently accelerate application modernization, streamline
            operations, and achieve faster time-to-value.
          </p>
        </div>
        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="relative w-full max-w-sm h-[380px]">
            {/* Soft background diamonds */}
            <div
              className="absolute top-40 left-10 w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl blur-[8px]
              animate-[floatSlow_5s_ease-in-out_infinite]"
            />

            <div
              className="absolute top-[190px] right-[39px] w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl blur-[8px]
              animate-[floatSlow_5s_ease-in-out_infinite_0.6s]"
            />

            {/* Center Dark Diamond */}
            <div
              className="absolute inset-0 left-4 flex items-center justify-center z-30
              animate-[fadeUp_0.8s_ease-out_forwards_0.2s]">
              <div
                className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#0b1e3a] to-[#132f5e] rounded-3xl flex items-center justify-center
                animate-[floatSlow_10s_ease-in-out_infinite]">
                <p className="-rotate-45 text-white text-[10px] font-semibold text-center leading-snug px-4">
                  Standardized & <br /> Hardened OS
                </p>
              </div>
            </div>

            {/* Top Diamond */}
            <div
              className="absolute top-[43px] left-[152px] -translate-x-1/2 z-20
              animate-[fadeUp_0.9s_ease-out_forwards_0.6s]">
              <div
                className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                animate-[float_10s_ease-in-out_infinite]">
                <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
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
              className="absolute left-[236px] top-[151px] -translate-y-1/2 z-20
              animate-[fadeUp_0.8s_ease-out_forwards_0.45s]">
              <div
                className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                animate-[float_4s_ease-in-out_infinite_0.2s]">
                <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
                  Patch & Lifecycle Control
                </p>
              </div>
            </div>

            {/* Left Diamond */}
            <div
              className="absolute left-[1px] top-[46%] -translate-y-1/2 z-20
              animate-[fadeUp_0.8s_ease-out_forwards_0.6s]">
              <div
                className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center
                animate-[float_4s_ease-in-out_infinite_0.4s]">
                <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
                  Compliance-Ready Platforms
                </p>
              </div>
            </div>

            {/* Accent red diamonds */}
            <div
              className="absolute bottom-[71px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md
              animate-[float_3s_ease-in-out_infinite]"
            />

            <div
              className="absolute top-10 left-14 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md opacity-80
              animate-[floatSlow_4s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* RIGHT SIDE — form (md only) */}
        <div className="hidden md:flex md:w-1/2 justify-end">
          {/* 🔽 Place your form here */}
          {/* <YourForm /> */}
        </div>
      </div>
    </section>
  );
}

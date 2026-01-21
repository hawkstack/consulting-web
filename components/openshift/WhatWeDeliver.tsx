"use client";

import React from "react";

export default function WhatWeDeliver() {
  return (
    <section className=" bg-white flex flex-col items-center px-4 pt-10 font-lexend">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12 text-black text-center">
        What we deliver
      </h2>

      {/* Diagram Wrapper */}
      <div className="relative w-full max-w-sm h-[380px]">
        {/* Soft background diamonds */}
                  <div className="absolute top-40 left-10 w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center blur-[8px] "/>
                  <div className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center blur-[8px] "/>
        {/* Center Dark Diamond */}
        <div className="absolute inset-0 left-10 flex items-center justify-center z-30">
          <div className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#0b1e3a] to-[#132f5e] rounded-3xl flex items-center justify-center ">
            <p className="-rotate-45 text-white text-[10px] font-semibold text-center leading-snug px-4">
             Standardized & <br /> Hardened OS
            </p>
          </div>
        </div>

        {/* Top Diamond */}

        <div className="absolute buttom-4 left-[38%] -translate-x-1/2 z-20">
          <div className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center ">
            <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
              OpenShift<br />Virtualization<br />Enablement
            </p>
          </div>
        </div>

        {/* Right Diamond */}
        <div className="absolute right-[35px] top-[40%] -translate-y-1/2 z-20">
          <div className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center ">
            <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
              Patch & Lifecycle Control
            </p>
          </div>
        </div>

        {/* Left Diamond */}
          <div className="absolute left-[1px] top-[46%] -translate-y-1/2 z-20">
          <div className="w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#cfdcff] to-[#9fb6ff] rounded-3xl flex items-center justify-center ">
            <p className="-rotate-45 text-black text-[10px] font-medium text-center leading-snug px-3">
              Compliance-Ready  Platforms
            </p>
          </div>
        </div>

        {/* Accent red diamonds */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md " />
        <div className="absolute top-10 left-14 w-[40px] h-[40px] bg-red-400 rotate-45 rounded-md  opacity-80" />
      </div>
    </section>
  );
}

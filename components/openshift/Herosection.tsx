"use client";
import Image from "next/image";
import heroBgTablet from "@/public/images/openshift/hero-bg-tablet.webp";
import heroBgMobile from "@/public/images/openshift/hero-bg-tablet.webp";
import heroBgDesktop from "@/public/images/openshift/hero-bg-tablet.webp";
import heroCircle from "@/public/images/openshift/vm-circle.webp";
import vmcircle from "@/public/images/openshift/vm-circle-image.webp";
import rightBG from "@/public/images/openshift/hero-bg-rigth.webp";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const colors = ["border-red-500", "border-green-500", "border-blue-500"];
  const [borderIndex, setBorderIndex] = useState(0);
  const [zoomedIn, setZoomedIn] = useState(false);
  const [label, setLabel] = useState("VM");
  const [swap, setSwap] = useState(false);

  // FAST BORDER BLINK
  useEffect(() => {
    const borderInterval = setInterval(() => {
      setBorderIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(borderInterval);
  }, []);

  // TEXT ANIMATION
  useEffect(() => {
    const textInterval = setInterval(() => {
      setZoomedIn(true);
      setLabel("VM Worker");
      setTimeout(() => {
        setZoomedIn(false);
        setLabel("VM");
      }, 3000);
    }, 6000);
    return () => clearInterval(textInterval);
  }, []);

  // CENTER SWAP
  useEffect(() => {
    const swapInterval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 4000);
    return () => clearInterval(swapInterval);
  }, []);

  return (
    <main className="relative min-h-screen md:min-h-0  text-white font-lexend box-border overflow-x-hidden">
      {/* MOBILE BACKGROUND IMAGE */}
      <div className="block md:hidden absolute inset-0 -z-10">
        <Image
          src={heroBgMobile}
          alt="Hero background mobile"
          fill
          priority
          className=" rotate-180 opacity-100"
        />
      </div>

      {/* TABLET BACKGROUND IMAGE */}
      <div className="hidden md:block absolute inset-0 -z-10">
        <Image
          src={heroBgTablet}
          alt="Hero background tablet"
          fill
          priority
          className="rotate-180 opacity-90 "
        />
      </div>
      <div className="hidden lg:block absolute inset-0 -z-10">
        <Image
          src={heroBgDesktop}
          alt="Hero background desktop"
          fill
          priority
          className=" object-cover  rotate-180 opacity-100"
        />
      </div>
      <div className="hidden md:block  absolute inset-0 -z-10 h-auto mt-12 ">
        <Image src={rightBG} alt="Hero background desktop" fill priority />
      </div>

      {/* TABLET GRID WRAPPER */}
      <div className="md:max-w-6xl md:mx-auto lg:max-w-7xl lg:mx-auto md:grid md:grid-cols-[1.1fr_1.4fr] md:gap-6 md:px-6 md:mb-10  lg:p-1">
        {/* LEFT / HERO TEXT */}
        <section className="px-4 mt-6 md:px-0 md:mt-[97px]  ">
          <div className="inline-block px-4 py-1 mb-4 text-xs rounded-full bg-white/10 border border-white/20 md:text-[12px] md:px-4 ">
            Enterprise-Grade Red Hat OpenShift Solutions
          </div>

          <h1 className="text-2xl font-bold leading-snug mb-4 md:text-[24px] md:leading-tight lg:text-[40px]">
            Red Hat OpenShift Container Platform Pilot
          </h1>

          <p className="text-sm text-white/80 mb-6 md:text-[12px] md:max-w-lg lg:text-[16px]">
            Rapidly validate and deploy a production-ready, enterprise-grade
            Kubernetes platform with Red Hat OpenShift, delivered by Red
            Hat–certified experts.
          </p>

          <button className="w-50 py-2 rounded-full bg-sky-500 text-xs font-semibold text-white shadow-lg flex items-center justify-center gap-1 md:w-fit md:px-8">
            <svg
              width="10"
              height="20"
              viewBox="0 0 8 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.789062 0.788818L7.78906 5.28882L0.789062 9.78882V0.788818Z"
                stroke="white"
                strokeWidth="1.57765"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Schedule a Consultation</span>
          </button>
        </section>

        {/* RIGHT / DIAGRAM */}
        <section className="px-4 mt-10 md:px-0 md:mt-6 ">
          <div className="bg-white rounded-2xl p-4 text-black shadow-xl overflow-hidden box-border  md:p-6 ">
            <div className="grid grid-cols-[0.9fr_2.1fr] gap-2 box-border md:grid-cols-[1fr_2.4fr] lg:grid-cols-[2fr_2.4fr] md:gap-4">
              {/* CONTROL PLANE */}
              <div className="flex flex-col min-w-0 box-border">
                <div className="text-center font-medium text-sm lg:text-[20px]">
                  Control Plane
                </div>
                <div className="text-center text-[9px] text-black/90 mb-2 whitespace-nowrap leading-tight">
                  (Bare Metal / Physical)
                </div>

                <div
                  className={`mt-auto border-2 border-dashed rounded-xl p-2 ${colors[borderIndex]} box-border`}>
                  <div className="grid grid-cols-3 gap-2 text-[9px] leading-tight">
                    <div className="bg-red-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      ...
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      ...
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      ...
                    </div>

                    <div className="bg-red-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      etcd
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      etcd
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center lg:text-[12px] justify-center">
                      etcd
                    </div>

                    <div className="bg-red-500 text-white rounded-md h-7 flex items-center justify-center text-[6px] lg:text-[12px] px-2">
                      api-server
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center text-[6px] lg:text-[12px] px-2">
                      api-server
                    </div>
                    <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center text-[6px]lg:text-[12px] px-2">
                      api-server
                    </div>
                  </div>
                </div>
              </div>

              {/* WORKER NODES */}
              <div className="flex flex-col gap-2 min-w-0 box-border">
                <div className="text-center font-medium text-sm lg:text-[20px]">
                  Worker Nodes
                </div>
                <div className="text-center text-[9px] mt-[-7px] text-black/90 whitespace-nowrap leading-tight">
                  (Physical hosts running VM workloads)
                </div>

                <div
                  className={`border-2 border-dashed rounded-xl p-2 ${colors[borderIndex]} box-border`}>
                  <div className="grid grid-cols-6 gap-0.5 md:gap-1">
                    {Array.from({ length: 36 }).map((_, i) => {
                      const row = Math.floor(i / 6);
                      const col = i % 6;
                      const edgeDist = Math.min(row, col, 5 - row, 5 - col);

                      let bg = "bg-red-500";
                      if (edgeDist >= 2) bg = "bg-green-500";
                      else if (edgeDist === 1) bg = "bg-blue-500";

                      const isCenter =
                        i === 14 || i === 15 || i === 20 || i === 21;

                      const transform = isCenter
                        ? swap
                          ? i === 14
                            ? "translate(118%, 110%)"
                            : i === 21
                            ? "translate(-118%, -110%)"
                            : i === 15
                            ? "translate(-118%, 110%)"
                            : "translate(118%, -110%)"
                          : "translate(0,0)"
                        : "translate(0,0)";

                      return (
                        <div
                          key={i}
                          className={`${bg} rounded-sm h-6 w-[90%] mx-auto flex items-center justify-center box-border transition-transform duration-700 md:h-7`}
                          style={{ transform }}>
                          <span
                            className={`text-[7px] text-white text-center leading-tight transition-transform duration-700 md:text-[8px] ${
                              zoomedIn ? "scale-110" : "scale-90"
                            }`}>
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`border-2 border-dashed rounded-xl p-3 ${colors[borderIndex]} bg-black text-white flex items-center justify-center gap-4 box-border`}>
                  <Image
                    src={vmcircle}
                    alt="OpenShift virtualization"
                    className="shrink-0 hidden md:block  md:w-8 md:h-8 lg:w-[54px] lg:h-[54px] md:relative right-7 top-8 "
                  />

                  <Image
                    src={heroCircle}
                    alt="OpenShift virtualization"
                    className="shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-[54px] lg:h-[54px]"
                  />

                  <div className="flex flex-col text-center text-sm">
                    <span className="font-semibold">Virtual Machines</span>
                    <span className="text-red-500 text-sm">
                      OpenShift Virtualization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-xl py-3 flex items-center justify-center gap-4 mt-4 box-border md:relative ">
              <Image
                src={heroCircle}
                alt="Physical hardware"
                className="shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-[54px] lg:h-[54px] md:absolute left-5 "
              />
              <span className="font-semibold text-sm">Physical Hardware</span>
            </div>
          </div>
        </section>
      </div>

      <div className="h-10 md:h-0 " />
    </main>
  );
}


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const colors = ["border-red-500", "border-green-500", "border-blue-500"];
  const [borderIndex, setBorderIndex] = useState(0);
  const [zoomedIn, setZoomedIn] = useState(false);
  const [label, setLabel] = useState("VM");
  const [swap, setSwap] = useState(false);

  // FAST BORDER BLINK (only border)
  useEffect(() => {
    const borderInterval = setInterval(() => {
      setBorderIndex((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(borderInterval);
  }, []);

  // SLOW TEXT ANIMATION
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

  // CENTER 4 GREEN BOX DIAGONAL SWAP
  useEffect(() => {
    const swapInterval = setInterval(() => {
      setSwap((prev) => !prev);
    }, 4000);

    return () => clearInterval(swapInterval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071a2f] via-[#071a2f] to-[#020b18] text-white font-lexend box-border overflow-x-hidden">
      <section className="px-4 mt-6">
        <div className="inline-block px-4 py-1 mb-4 text-xs rounded-full bg-white/10 border border-white/20">
          Enterprise-Grade Red Hat OpenShift Solutions
        </div>

        <h1 className="text-2xl font-bold leading-snug mb-4">
          Red Hat OpenShift Container Platform Pilot
        </h1>

        <p className="text-sm text-white/80 mb-6">
          Rapidly validate OpenShift virtualization and run VMs and containers
          side-by-side on a unified, enterprise-grade platform.
        </p>

        <button className="w-full py-3 rounded-full bg-sky-500 font-semibold text-white shadow-lg flex items-center justify-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 9 11"
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

      <section className="px-4 mt-10">
        <div className="bg-white rounded-2xl p-4 text-black shadow-xl overflow-hidden box-border">
          <div className="grid grid-cols-[0.9fr_2.1fr] gap-2 box-border">
            {/* LEFT COLUMN */}
            <div className="flex flex-col min-w-0 box-border">
              <div className="text-center font-medium text-sm">
                Control Plane
              </div>
              <div className="text-center text-[9px] text-black/90 mb-2 whitespace-nowrap leading-tight">
                (Bare Metal / Physical)
              </div>

              <div
                className={`mt-auto border-2 border-dashed rounded-xl p-2 ${colors[borderIndex]} box-border`}>
                <div className="grid grid-cols-3 gap-2 text-[9px] leading-tight">
                  <div className="bg-red-500 text-white rounded-md h-7 flex items-center justify-center">
                    ...
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center">
                    ...
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center">
                    ...
                  </div>

                  <div className="bg-red-500 text-white rounded-md h-7 flex items-center justify-center">
                    etcd
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center">
                    etcd
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center">
                    etcd
                  </div>

                  <div className="bg-red-500 text-white rounded-md h-7 flex items-center justify-center text-[6px] px-2">
                    api-server
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center text-[6px] px-2">
                    api-server
                  </div>
                  <div className="bg-blue-500 text-white rounded-md h-7 flex items-center justify-center text-[6px] px-2">
                    api-server
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-2 min-w-0 box-border">
              <div className="text-center font-medium text-sm">
                Worker Nodes
              </div>
              <div className="text-center text-[9px] mt-[-7px] text-black/90 whitespace-nowrap leading-tight">
                (Physical hosts running VM workloads)
              </div>

              <div
                className={`border-2 border-dashed rounded-xl p-2 ${colors[borderIndex]} box-border`}>
                <div className="grid grid-cols-6 gap-0.5">
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
                          ? "translate(100%, 100%)"
                          : i === 21
                          ? "translate(-100%, -100%)"
                          : i === 15
                          ? "translate(-100%, 100%)"
                          : "translate(100%, -100%)"
                        : "translate(0,0)"
                      : "translate(0,0)";

                    return (
                      <div
                        key={i}
                        className={`${bg} rounded-sm h-6 w-[90%] mx-auto flex items-center justify-center box-border transition-transform duration-700`}
                        style={{ transform }}>
                        <span
                          className={`text-[7px] text-white text-center leading-tight transition-transform duration-700 ${
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
                className={`border-2 border-dashed rounded-xl p-3 ${colors[borderIndex]} bg-black text-white flex items-center justify-center gap-2 box-border`}>
                <span className="text-red-500 font-bold">⟳</span>
                <span className="font-semibold">Virtual Machines</span>
                <span className="text-red-500 text-sm">
                  OpenShift Virtualization
                </span>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-xl py-3 flex items-center justify-center gap-2 mt-4 box-border">
            <span className="text-red-500 font-bold">⟳</span>
            <span className="font-semibold">Physical Hardware</span>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}

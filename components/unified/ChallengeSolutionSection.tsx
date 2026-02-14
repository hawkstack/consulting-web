"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ChallengeSolution() {
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  const [card1Visible, setCard1Visible] = useState(false);
  const [card2Visible, setCard2Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === card1Ref.current) {
            setCard1Visible(entry.isIntersecting);
          }
          if (entry.target === card2Ref.current) {
            setCard2Visible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f7fbff] px-[40px] py-[33px] font-lexend lg:px-[90px] lg:py-[50px]">
      <div className="mx-auto max-w-[440px] md:max-w-[800px] lg:max-w-[1440px] space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-[60px]">
        
        {/* CARD 1 — FROM LEFT */}
        <div
          ref={card1Ref}
          className={`relative overflow-hidden rounded-tr-2xl rounded-br-2xl bg-white
            shadow-[0_8px_24px_rgba(0,0,0,0.15)]
            transform transition-all duration-700 ease-out
            w-full max-w-[570px]
            ${
              card1Visible
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-6 md:-translate-x-8 xl:-translate-x-16 opacity-0 scale-95"
            }`}
        >
          <span
            className="
              absolute left-0
              top-[54px]
              bottom-0
              md:top-[59px]
              lg:top-[72px]
              w-[4px]
              bg-[#FF0000]
            "
          />

          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-4 py-3">
            <h3 className="text-[20px] md:text-[24px] xl:text-[32px] font-[600] lg:font-[500] text-white">
              The Strategic Challenge
            </h3>
          </div>

          <div className="px-[22px] pt-[8px] pb-[13px] text-[10px] md:text-[10px] lg:text-[17px] font-[400] leading-relaxed text-[#2b2b2b] text-justify">
            Organizations often run legacy virtual machines and containerized
            workloads on separate platforms, leading to siloed tools and teams,
            higher infrastructure and management costs, and increased
            operational complexity. This fragmented approach results in
            inconsistent security, governance, and visibility, making compliance
            more challenging and modernization initiatives slower, riskier, and
            harder to scale.
          </div>
        </div>

        {/* CARD 2 — FROM RIGHT */}
        <div
          ref={card2Ref}
          className={`relative overflow-hidden rounded-tr-2xl rounded-br-2xl bg-white
            shadow-[0_8px_24px_rgba(0,0,0,0.15)]
            transform transition-all duration-700 ease-out
            w-full max-w-[570px]
            ${
              card2Visible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-6 md:translate-x-8 xl:translate-x-16 opacity-0 scale-95"
            }`}
        >
          <span
            className="
              absolute left-0
              top-[54px]
              bottom-0
              md:top-[59px]
              lg:top-[72px]
              w-[4px]
              bg-[#155DFC]
            "
          />

          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-4 py-3">
            <h3 className="text-[20px] md:text-[24px] xl:text-[32px] font-[600] lg:font-[500] text-white">
              The Hawkstack Solution
            </h3>
          </div>

          <div className="px-[22px] pt-[8px] pb-[13px] text-[10px] md:text-[10px] lg:text-[17px] font-[400] leading-relaxed text-[#2b2b2b] text-justify">
            HawkStack provides a unified OpenShift platform that enables VMs and
            containers to run side by side with Kubernetes-native lifecycle
            management. It delivers enterprise-grade availability, security, and
            consistent governance while unifying operations under a single
            control plane. With a phased, low-risk adoption approach, HawkStack
            helps organizations modernize efficiently while reducing cost and
            complexity.
          </div>
        </div>

      </div>
    </section>
  );
}

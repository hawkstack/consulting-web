"use client";

import React, { useEffect, useRef, useState } from "react";

export default function StrategicChallengeMobile() {
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
      { threshold: 0.3 },
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f7fbff] px-[40px] py-[33px] font-lexend lg:px-[90px] lg:py-[50px]">
      <div className="mx-auto max-w-[440px] md:max-w-[800px] lg:max-w-[1440px] space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-[60px]">
        <div
          ref={card1Ref}
          className={`relative overflow-hidden rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] transform transition-all duration-700 ease-out md:w-[330px] lg:w-[570px] ${
            card1Visible
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-16 opacity-0 scale-95"
          }`}>
          <span className="absolute left-0 top-[54px]  h-[calc(190%-72px)]  w-[4px] lg:top-[72px] lg:h-[calc(98%-60px)]  bg-red-500" />

          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-4 py-3">
            <h3 className="text-[20px] md:text-[20px] lg:text-[32px] font-[600] lg:font-[500] text-white">
              The Strategic Challenge
            </h3>
          </div>

          <div className="px-[22px] pt-[8px] pb-[13px] text-[10px] md:text-[10px] lg:text-[17px] font-[400] leading-relaxed text-[#2b2b2b] text-justify">
            Organizations are under constant pressure to modernize application
            platforms to improve speed to market, operational efficiency, and
            business resilience. While Red Hat OpenShift enables these outcomes,
            adopting it without the right foundation can result in project
            delays, rising costs, security gaps, and long-term operational risk.
            Enterprises need to move fast—without creating technical debt that
            limits scalability and future innovation.
          </div>
        </div>

        <div
          ref={card2Ref}
          className={`relative overflow-hidden rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] transform transition-all duration-700 ease-out delay-150 md:w-[330px] lg:w-[570px] ${
            card2Visible
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-16 opacity-0 scale-95"
          }`}>
          <span
            className="absolute left-0 top-[54px]  h-[calc(190%-72px)] lg:top-[72px] lg:h-[calc(98%-60px)]   w-[4px] bg-[#155DFC]"
          />

          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-4 py-3">
            <h3 className="text-[20px] md:text-[20px] lg:text-[32px] font-[600] lg:font-[500] text-white">
              The Hawkstack Solution
            </h3>
          </div>

          <div className="px-[22px] pt-[8px] pb-[13px] text-[10px] md:text-[10px] lg:text-[17px] font-[400] leading-relaxed text-[#2b2b2b] text-justify">
            HawkStack’s Red Hat OpenShift Container Platform Pilot provides a
            low-risk, accelerated path to enterprise adoption. Delivered in a
            focused 2–4-week engagement, Red Hat–certified experts design and
            deploy a production-ready OpenShift platform aligned with business
            and operational priorities. This approach removes guesswork, reduces
            risk, and creates a strong foundation for scale—allowing
            organizations to confidently move from pilot to production.
          </div>
        </div>
      </div>
    </section>
  );
}

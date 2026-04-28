"use client";

import type { CloudServiceItem,EngineeringDrivenCloudServicesProps } from "@/types/home/home";
import { useState } from "react";
import Link from "next/link";
import { RightArrow } from "@/components/icons/Home/Home";

type Props = {
  data: EngineeringDrivenCloudServicesProps;
}

const activeBlue = "#5272FF";
const inactiveGray = "#727272";

function ServiceArrow({ active, className = "" }: { active: boolean; className?: string }) {
  if (active) {
    return (
      <svg aria-hidden="true" className={className} fill="none" height="26" viewBox="0 0 15 26" width="15">
        <path d="M1.58789 1.58594L12.6971 12.6952L1.58789 23.8044" stroke={activeBlue} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.17407" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className={className} fill="none" height="18" viewBox="0 0 16 18" width="16">
      <path d="M-0.638672 1.51172L12.8278 3.00799L14.324 16.4744" stroke={inactiveGray} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.02292" />
    </svg>
  );
}


function NumberBadge({ number, active }: { number: string; active: boolean }) {
  if (active) {
   return (
      <span
        className="inline-block text-[24px] lg:text-[31px] xl:text-[48px] leading-none font-semibold"
        style={{
          color: "#ffffff",
          WebkitTextStroke: "2.5px #5272FF",
          paintOrder: "stroke fill",
          textRendering: "geometricPrecision",
        }}
      >
        {number}
      </span>
    );
  }

  return (
    <span className="text-[24px] lg:text-[31px] xl:text-[48px] leading-none text-[#727272]/40">
      {number}
    </span>
  );
}

function DesktopServiceRow({ item, active, onClick }: { item: CloudServiceItem; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-5 border-b pb-[12px] pt-[10px] text-left transition-colors"
      style={{ borderColor: active ? "#5272FF" : inactiveGray }}
      aria-pressed={active}
    >
      <NumberBadge active={active} number={item.number} />
      <span className="flex-1 md:text-[14px] lg:text-[16px] xl:text-[24px] font-medium leading-[1.2]" style={{ color: active ? activeBlue : "#727272" }}>
        {item.title}
      </span>
      <ServiceArrow active={active} className="shrink-0" />
    </button>
  );
}

function MobileServiceRow({ item, active, onClick }: { item: CloudServiceItem; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border-b pb-4 pt-4 text-left"
      style={{ borderColor: active ? "#5272FF" : inactiveGray }}
      aria-pressed={active}
    >
      <div className="flex items-center gap-3">
        <NumberBadge active={active} number={item.number} />
        <span className="flex-1 text-[20px] font-medium leading-[1.35]" style={{ color: active ? activeBlue : "#727272" }}>
          {item.title}
        </span>
        <ServiceArrow active={active} className="shrink-0" />
      </div>
      {active && (
        <p className="max-w-[92%] pt-4 pl-10 text-[11.5px] leading-[1.65] text-[#000000] font-light">
          {item.description}
        </p>
      )}
    </button>
  );
}

export default function EngineeringDrivenCloudServices({ data }: Props) {
  const { services = [] } = data || {};
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!services || services.length === 0) return null;
  
  const activeService = services[activeIndex] ?? services[0];

  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-14 lg:px-10 xl:px-6 font-lexend">
      <div className="mx-auto max-w-[1210px]">
        <div className="grid gap-16 md:grid-cols-[0.75fr_0.90fr] lg:gap-[120px]">
          
          {/* Desktop Left - List View */}
          <div className="hidden md:block">
            <h2 className="max-w-[500px] text-[22px] font-semibold leading-[1.18] text-[#011235] md:text-[25px] lg:text-[30px] xl:text-[40px]">
              {data.title}
            </h2>

            <div className="mt-5">
              {services.map((item, index) => (
                <DesktopServiceRow
                  key={item.id}
                  active={index === activeIndex}
                  item={item}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Desktop Right - Active Service Detail */}
          <div className="hidden md:block md:mt-5 xl:mt-10">
            <div className="md:mb-6 xl:mb-[30px] h-[3px] xl:w-[90px] w-[50px] rounded-full bg-[#5A73FF]" />
            <h3 className="text-[24px] lg:text-[28px] xl:text-[48px] font-medium leading-[1.15] text-[#5A73FF] min-[1366px]:text-[27px]">
              {activeService.title}
            </h3>
            <p className="md:mt-5 xl:mt-8 md:max-w-[400px] xl:max-w-[610px] text-[12px] lg:text-[14px] xl:text-[16px] text-[#000000]">
              {activeService.description}
            </p>

           <div className="md:mt-6 lg:mt-10 overflow-hidden rounded-[16px] relative aspect-[16/8] w-full md:max-w-[300px] xl:max-w-[440px]">
              <video
                key={activeService.video} // Key ensures the video reloads when activeService changes
                src={activeService.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full rounded-[16px] object-cover shadow-lg"
              />
            </div>
            <Link href={activeService.href}>
              <div className="mt-6 lg:mt-10 inline-flex items-center gap-2 rounded-full border border-[#5272FF] px-5 py-2 text-[12px] xl:text-[18px] font-medium text-[#5272FF]">
                <span>Learn More</span>
                <span aria-hidden="true">
                  <RightArrow className="text-[#5272FF] h-[10px]"/>
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile View - Accordion Style */}
          <div className="md:hidden">
            <h2 className="text-center text-[22px] font-semibold leading-[1.2] text-[#0F2147]">
              {data.title}
            </h2>

            <div className="mt-8">
              {services.map((item, index) => (
                <MobileServiceRow
                  key={item.id}
                  active={index === activeIndex}
                  item={item}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

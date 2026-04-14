"use client";

import type {
  CloudServiceItem,
  EngineeringDrivenCloudServicesProps,
} from "@/app/types/cloudServices";
import { cloudServicesData } from "@/constants/cloudServices.data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const activeBlue = "#5272FF";
const inactiveGray = "#727272";
const lineGray = "#D6D6D6";

function ServiceArrow({
  active,
  className = "",
}: {
  active: boolean;
  className?: string;
}) {
  if (active) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height="26"
        viewBox="0 0 15 26"
        width="15"
      >
        <path
          d="M1.58789 1.58594L12.6971 12.6952L1.58789 23.8044"
          stroke={activeBlue}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.17407"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="18"
      viewBox="0 0 16 18"
      width="16"
    >
      <path
        d="M-0.638672 1.51172L12.8278 3.00799L14.324 16.4744"
        stroke={inactiveGray}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.02292"
      />
    </svg>
  );
}

function NumberBadge({
  number,
  active,
}: {
  number: string;
  active: boolean;
}) {
  if (active) {
    return (
      <span className="relative inline-flex items-center justify-center text-[48px] leading-none">
        <span
          aria-hidden="true"
          className="absolute inset-0 text-[48px] leading-none"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.4px ${activeBlue}`,
            textRendering: "geometricPrecision",
          }}
        >
          {number}
        </span>
        <span className="text-[48px] leading-none text-white">{number}</span>
      </span>
    );
  }

  return (
    <span className="text-[48px] leading-none text-[#C7C7C7]">
      {number}
    </span>
  );
}

function DesktopServiceRow({
  item,
  active,
  onClick,
}: {
  item: CloudServiceItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-4 border-b pb-[12px] pt-[10px] text-left transition-colors"
      style={{ borderColor: active ? "#AFC0FF" : lineGray }}
      aria-pressed={active}
    >
      <NumberBadge active={active} number={item.number} />
      <span
        className="flex-1 text-[24px] font-medium leading-[1.2]"
        style={{ color: active ? activeBlue : "#6C6C6C" }}
      >
        {item.title}
      </span>
      <ServiceArrow active={active} className="shrink-0" />
    </button>
  );
}

function MobileServiceRow({
  item,
  active,
  onClick,
}: {
  item: CloudServiceItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border-b pb-4 pt-4 text-left"
      style={{ borderColor: active ? "#AFC0FF" : lineGray }}
      aria-pressed={active}
    >
      <div className="flex items-center gap-3">
        <NumberBadge active={active} number={item.number} />
        <span
          className="flex-1 text-[24px] font-medium leading-[1.35]"
          style={{ color: active ? activeBlue : "#666666" }}
        >
          {item.title}
        </span>
        <ServiceArrow active={active} className="shrink-0" />
      </div>

      {active ? (
        <p className="max-w-[92%] pt-4 text-[11px] leading-[1.65] text-[#333333]">
          {item.description}
        </p>
      ) : null}
    </button>
  );
}

export default function EngineeringDrivenCloudServices({
  title = "Engineering Driven Cloud Services",
  services = cloudServicesData,
}: EngineeringDrivenCloudServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] ?? services[0];

  if (!activeService) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-14 lg:px-10 xl:px-0 font-lexend">
      <div className="mx-auto max-w-[1210px]">
        <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:gap-[64px]">
          <div className="hidden xl:block">
            <h2 className="max-w-[600px] text-[18px] font-bold leading-[1.18] text-[#011235] md:text-[20px] xl:text-[40px]">
              Engineering Driven Cloud
              <br />
              Services
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

          <div className="hidden xl:block">
            <div className="mb-[18px] h-[3px] w-[44px] rounded-full bg-[#5A73FF]" />
            <h3 className="text-[24px] font-medium leading-[1.15] text-[#5A73FF] min-[1366px]:text-[27px]">
              {activeService.title}
            </h3>
            <p className="mt-5 max-w-[470px] text-[13px] leading-[1.85] text-[#222222]">
              {activeService.description}
            </p>

            <div className="mt-6 overflow-hidden rounded-[6px]">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                width={380}
                height={171}
                className="h-[171px] w-[380px] rounded-[6px] object-cover"
                priority
              />
            </div>

            <div
              // href={activeService.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#5A73FF] px-4 py-[8px] text-[12px] font-medium text-[#5A73FF] transition-colors hover:bg-[#5A73FF] hover:text-white"
            >
              <span>Learn More</span>
              <span aria-hidden="true">→</span>
            </div>
          </div>

          <div className="xl:hidden">
            <h2 className="text-center text-[18px] font-semibold leading-[1.2] text-[#0F2147] sm:text-[22px]">
              {title}
            </h2>

            <div className="mt-6">
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

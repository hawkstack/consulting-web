"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import type { EngineeringDrivenCloudServicesProps } from "@/types/home/home";
import {
  SolutionListArrow,
  SolutionDiscussionArrow,
} from "@/components/icons/Home/SolutionIcons";

type Props = { data: EngineeringDrivenCloudServicesProps };

export default function EngineeringDrivenCloudServices({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { services } = data;
  if (!services.length) return null;
  const activeService = services[activeIndex] ?? services[0];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % services.length;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + services.length) % services.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = services.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="our-solutions"
      aria-labelledby="solutions-heading"
      className="scroll-mt-20 bg-white px-5 py-10 font-lexend md:px-10 xl:px-[68px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid items-center gap-5 md:grid-cols-[45fr_55fr] md:gap-7">
          <h2
            id="solutions-heading"
            className="max-w-[600px] text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.16] tracking-[-0.6px] text-[#08152f]">
            {data.title}
          </h2>
          <p className="max-w-[390px] text-sm leading-[1.55] text-[#40577b] md:justify-self-end md:text-left">
            {data.intro}
          </p>
        </div>

        <div className="mt-7 grid items-stretch gap-6 md:grid-cols-[45fr_55fr] md:gap-7">
          <div
            className="min-w-0 md:grid md:grid-rows-6"
            role="tablist"
            aria-label={data.title}
            aria-orientation="vertical">
            {services.map((service, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={service.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={"solution-tab-" + service.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={"solution-panel-" + service.id}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`flex min-h-[clamp(52px,4.4vw,60px)] w-full cursor-pointer items-center gap-5 border-b px-0 py-2 text-left focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5272ff] ${selected ? "border-[#aab7ff] text-[#5272ff]" : "border-[#d9d9d9] text-[#777777]"}`}>
                  <span
                    aria-hidden="true"
                    className={`w-[52px] shrink-0 text-[clamp(28px,2.6vw,36px)] font-medium leading-none ${selected ? "text-white [-webkit-text-stroke:1px_#5272ff]" : "text-[#c8c8c8]"}`}>
                    {service.number}
                  </span>
                  <span
                    className={`min-w-0 flex-1 text-[clamp(14px,1.55vw,20px)] leading-[1.3] ${selected ? "font-medium" : "font-normal"}`}>
                    {service.title}
                  </span>
                  <SolutionListArrow
                    active={selected}
                    className="mr-3 size-5 shrink-0"
                  />
                </button>
              );
            })}
          </div>

          <div
            key={activeService.id}
            id={"solution-panel-" + activeService.id}
            role="tabpanel"
            aria-labelledby={"solution-tab-" + activeService.id}
            tabIndex={0}
            className="home-solutions-panel flex min-w-0 flex-col md:min-h-[calc(6*clamp(52px,4.4vw,60px))] rounded-lg border border-[#d7e3f8] bg-[#f2f6ff] p-5 text-[#08152f] focus-visible:outline-2 focus-visible:outline-[#5272ff] lg:p-6">
            <div
              aria-hidden="true"
              className="mb-2 h-[3px] w-[72px] rounded-full bg-[#08152f]"
            />
            <h3 className="text-[clamp(20px,1.8vw,24px)] font-semibold leading-[1.2] tracking-[-0.3px]">
              {activeService.headline}
            </h3>
            <p className="mt-2 text-xs leading-[1.5] text-[#40577b]">
              {activeService.description}
            </p>
            <div className="mt-3 grid flex-1 items-center gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div className="flex h-full min-w-0 flex-col justify-between gap-3">
                <ul className="flex flex-col gap-3 text-xs leading-[1.3] text-[#5272ff]">
                  {activeService.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-[3px] size-[10px] shrink-0 rounded-full bg-[#5272ff]"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={activeService.href}
                  className="inline-flex w-fit max-w-full items-center justify-center gap-3 rounded-full border border-[#5272ff] bg-white px-4 py-2 text-[11px] font-medium text-[#5272ff] transition-colors hover:bg-[#eaf0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5272ff]">
                  <span>{data.actionLabel}</span>
                  <SolutionDiscussionArrow className="h-3 w-4 shrink-0" />
                </Link>
              </div>
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                width={668}
                height={376}
                sizes="(max-width: 639px) 90vw, (max-width: 767px) 50vw, 28vw"
                className="aspect-[334/188] w-full max-h-[180px] self-center rounded-lg object-cover sm:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

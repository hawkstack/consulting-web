"use client";

import { useRef, useState } from "react";
import type { RedHatApplicationServicesData } from "@/app/types/product-reseller/product-redhat/redhat-products/redhat-application-services";

type RedHatApplicationServicesSectionProps = {
  data: RedHatApplicationServicesData;
  backgroundClassName?: string;
};

const RedHatApplicationServicesSection = ({
  data,
  backgroundClassName = "bg-[#f3f3f3]",
}: RedHatApplicationServicesSectionProps) => {
  const [showAllMobileCards, setShowAllMobileCards] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggleMobileCards = () => {
    if (showAllMobileCards) {
      setShowAllMobileCards(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setShowAllMobileCards(true);
  };

  return (
    <section
      ref={sectionRef}
      className={`${backgroundClassName} px-6 py-10 text-[#1d1d1f] sm:px-12 sm:py-12 lg:px-16 xl:px-25`}
    >
      <div className="mx-auto w-full max-w-[1248px] ">
        <h1 className="text-center text-[24px] font-semibold leading-tight sm:text-left sm:text-[32px] lg:text-[46px]">
          {data.heading}
        </h1>

        <div className="mx-auto mt-7 grid max-w-[253px] grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {data.products.map((product, index) => (
            <article
              key={product.title}
              className={`min-h-[111px] border border-[#d2d2d2] bg-white px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:min-h-[115px] sm:px-6 ${
                index > 2 && !showAllMobileCards ? "hidden sm:block" : ""
              }`}
            >
              <h2 className="text-[16px] font-semibold leading-tight text-[#0066cc] sm:text-[15px] lg:text-[20px]">
                {product.title}
              </h2>
              <p className="mt-2 text-[12px] leading-[1.55] text-[#333333] sm:text-[11px] lg:text-[14px]">
                {product.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:hidden">
          <button
            type="button"
            onClick={handleToggleMobileCards}
            className="rounded-full bg-[#006fd6] px-8 py-3 text-[12px] font-semibold text-white shadow-[0_14px_28px_rgba(0,111,214,0.28)] transition hover:bg-[#005fb8]"
          >
            {showAllMobileCards
              ? data.showLessButtonText
              : data.showAllButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RedHatApplicationServicesSection;

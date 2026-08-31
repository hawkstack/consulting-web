"use client";

import { useState } from "react";

import type { TechnicalArchiveData } from "@/components/home/events-webinars/types/events-webinars";

type TechnicalArticlesSectionProps = {
  data: TechnicalArchiveData;
};

const TechnicalArticlesSection = ({ data }: TechnicalArticlesSectionProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = data.tabs[activeTabIndex];

  return (
    <section className="bg-[#F2F4F6] font-lexend">
      <div className="mx-auto w-full max-w-[1170px] px-4 py-10 sm:px-9 sm:py-16 lg:px-10 lg:py-[72px] xl:px-0">
        <header className="text-center">
          <h2 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#191C1E] sm:text-[30px] xl:text-[30px]">
            {data.title}
          </h2>
          <p className="text-center mx-auto w-[230px] md:w-full mt-2 text-[12px] leading-[1.45] text-[#434654] sm:text-[14px] xl:text-[16px]">
            {data.description}
          </p>
        </header>

        <div className="mt-6 overflow-hidden rounded-[8px] bg-white sm:mt-8">
          <div
            className="flex overflow-x-auto border-b border-[#E2E8F0]"
            role="tablist"
            aria-label={data.title}
          >
            {data.tabs.map((tab, index) => {
              const isActive = index === activeTabIndex;

              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabIndex(index)}
                  className={`relative shrink-0 px-4 py-4 xl:py-5 text-[12px] md:text-[16px] font-medium leading-4 transition-colors sm:px-5 ${
                    isActive
                      ? "text-[#003CA3]"
                      : "text-[#434654] hover:text-[#0743A8]"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#003CA3]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="space-y-4 px-5 py-6 sm:px-8 sm:py-6">
            {activeTab.items.map((item) => (
              <article
                key={item.title}
                className="flex h-auto flex-col justify-center rounded-[5px] border border-[#F1F3F6] border-l-2 border-l-[#1551B8] py-2 pl-3 pr-3 h-auto xl:h-[120px]"
              >
                <h3 className="text-[16px] font-medium leading-[1.35] tracking-[-0.025em] text-[#191C1E] sm:text-[24px]">
                  {item.title}
                </h3>
                <p className="w-full md:w-[500px] lg:w-[600px] xl:w-full mt-0.5 xl:mt-2 text-[12px] leading-[1.45] text-[#434654] sm:text-[14px] xl:text-[16px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArticlesSection;

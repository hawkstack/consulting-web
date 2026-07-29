import Image from "next/image";

import type { AzureEngineeringData } from "../types/azure";

type AzureEngineeringSectionProps = {
  data: AzureEngineeringData;
};

const AzureCapabilityCheckIcon = () => (
  <span className="mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/25 md:h-[18px] md:w-[18px]">
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className="h-[8px] w-[8px] md:h-[10px] md:w-[10px]"
      aria-hidden="true">
      <path
        d="M3.8 8.1 1.9 6.2l-.9.9 2.8 2.8 7-7-.9-.9-6.1 6.1Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

export default function AzureEngineeringSection({
  data,
}: AzureEngineeringSectionProps) {
  return (
    <section className="bg-[#0759D8] px-[14px] py-10 text-white sm:px-8 md:px-10 md:py-14 lg:px-12 lg:py-[66px] xl:px-[68px]">
      <div className="mx-auto grid w-full max-w-[1254px] items-center gap-8 md:grid-cols-[0.78fr_1fr] md:gap-12 lg:gap-16">
        <div>
          <h2 className="hidden max-w-[420px] text-[30px] font-bold leading-[1.13] tracking-normal md:block lg:text-[38px] xl:text-[42px]">
            {data.title}
          </h2>
          <h2 className="max-w-[310px] text-[20px] font-bold leading-[1.18] tracking-normal md:hidden">
            {data.mobileTitle}
          </h2>

          <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
            {data.capabilities.map((capability) => (
              <div key={capability.title} className="flex max-w-[430px] gap-3">
                <AzureCapabilityCheckIcon />
                <div>
                  <h3 className="text-[8px] font-bold leading-[1.25] md:text-[11px] lg:text-[12px]">
                    {capability.title}
                  </h3>
                  <p className="mt-1 text-[9px] leading-[1.55] text-white/82 md:text-[12px] lg:text-[13px]">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[12px] border-[4px] border-[#377FF0] bg-[#020817] md:rounded-[18px] md:border-[5px]">
          <Image
            src={data.image}
            alt={data.imageAlt}
            width={590}
            height={590}
            className="aspect-[1.58] h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

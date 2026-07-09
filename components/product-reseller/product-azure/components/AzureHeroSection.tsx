import Image from "next/image";
import Link from "next/link";

import type { AzureHeroData } from "../types/azure";

interface AzureHeroSectionProps {
  data: AzureHeroData;
}

export default function AzureHeroSection({ data }: AzureHeroSectionProps) {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] px-2.5 pb-5 pt-6 md:px-9 md:pb-0 md:pt-10 lg:px-12 lg:pt-14 lg:pb-10 xl:px-[68px] xl:pt-[72px]">
        <div className="grid items-center gap-4 md:grid-cols-[1fr_0.92fr] md:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-9">
          <div className="contents md:block">
            <div className="order-2 md:order-none">
              <div className="mb-4 hidden w-fit items-center gap-1.5 rounded-full border border-[#063B78] bg-[#04162B] px-2.5 py-1 md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#087BFF]" />
                <span className="text-[8px] font-bold tracking-[0.14em] text-[#168BFF] lg:text-[9px]">
                  {data.eyebrow}
                </span>
              </div>

              <h1 className="max-w-[680px] text-[14px] font-bold leading-[1.25] tracking-[-0.02em] sm:text-lg md:text-[20px] lg:text-[30px] xl:text-[40px]">
                {data.heading}{" "}
                <span className="text-[#087BFF]">{data.highlightedHeading}</span>{" "}
                {data.headingSuffix}
              </h1>

              <p className="mt-2 max-w-[610px] text-[9px] leading-[1.55] text-[#D1D5DB] md:mt-4 md:text-[11px] lg:mt-6 lg:text-[14px] lg:leading-[1.65] xl:text-[16px]">
                {data.description}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:mt-5 lg:mt-7">
                {data.buttons.map((button) => (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={`flex h-8 items-center justify-center rounded-[5px] px-5 text-[10px] font-semibold transition-colors md:h-8 md:text-[8px] lg:h-11 lg:px-7 lg:text-[11px] xl:h-12 xl:text-xs ${
                      button.variant === "primary"
                        ? "bg-[#087BFF] hover:bg-[#006CE0]"
                        : "border border-[#182C4A] bg-[#0E0F11] hover:bg-[#17191D]"
                    }`}
                  >
                    {button.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 md:hidden">
                {data.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.label} className="flex min-h-8 items-center gap-2 rounded-[5px] border border-[#242424] bg-[#101010] px-2.5 py-1.5">
                      <Icon />
                      <span className="text-[8px] font-medium leading-tight text-[#E5E7EB]">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-7 hidden border-t border-[#181818] pt-5 md:block lg:mt-8 lg:pt-6">
              <p className="text-[8px] font-bold tracking-[0.12em] text-[#6B7280] lg:text-[10px]">
                {data.trustedLabel}
              </p>
              <div className="mt-3 flex items-center gap-6 lg:gap-8">
                {data.trustedCompanies.map((company) => (
                  <span key={company} className="text-xs font-extrabold text-[#555] lg:text-base xl:text-lg">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-none md:justify-end">
            <Image
              src={data.image}
              alt={data.imageAlt}
              width={560}
              height={560}
              priority
              className="h-auto w-full max-w-[168px] rounded-lg md:max-w-[300px] lg:max-w-[430px] xl:max-w-[530px]"
            />
          </div>
        </div>
      </div>

      <div className="hidden bg-[#031A42] px-8 py-6 text-center md:mt-10 md:block lg:hidden">
        <p className="text-[8px] font-bold tracking-[0.12em] text-[#A9B7D3]">{data.trustedLabel}</p>
        <div className="mt-3 flex items-center justify-center gap-7">
          {data.trustedCompanies.map((company) => (
            <span key={company} className="text-sm font-extrabold">{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

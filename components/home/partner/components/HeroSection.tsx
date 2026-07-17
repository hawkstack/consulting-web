import Link from "next/link";
import type { PartnerHeroData } from "@/components/home/partner/types/partner";

type HeroSectionProps = {
  data: PartnerHeroData;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative isolate flex min-h-[235px] items-center justify-center overflow-hidden bg-[#123984] px-5 py-12 font-lexend text-white sm:min-h-[300px] sm:px-8 md:min-h-[540px] lg:min-h-[630px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,#0d3176_0%,#1747a7_47%,#2361d7_100%)]" />

      <div className="flex w-full max-w-[780px] flex-col items-center text-center">
        <span className="rounded-[14px] bg-[#3672c9] px-2 py-[3px] text-[5px] font-medium tracking-[0.12em] text-[#dcecff] sm:text-[7px] md:px-4 md:py-2 md:text-[11px]">
          {data.eyebrow}
        </span>

        <h1 className="mt-3 max-w-[500px] text-[18px] font-semibold leading-[1.2] tracking-[-0.03em] sm:mt-4 sm:text-[26px] md:mt-8 md:max-w-[720px] md:text-[44px] lg:text-[46px] xl:text-[48px]">
          <span className="text-[#01F0FF]">{data.title.highlight}</span>
          {data.title.text}
        </h1>

        <p className="mt-3 max-w-[530px] text-[7px] font-normal leading-[1.5] text-[#A5CDEA] sm:mt-4 sm:text-[10px] md:mt-7 md:max-w-[1040px] xl:max-w-[1040px] md:text-[18px] md:leading-[1.4]">
          {data.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-3 md:mt-16 md:gap-4">
          {data.buttons.map((button) => (
            <Link
              key={button.label}
              href={button.href}
              className={`inline-flex min-h-[18px] items-center justify-center rounded-full px-3 text-[5px] font-medium transition-colors sm:min-h-[30px] sm:px-5 sm:text-[8px] md:min-h-[47px] md:min-w-[195px] md:px-8 md:text-[14px] ${
                button.variant === "primary"
                  ? "bg-[#0b3c91] text-white shadow-[0_5px_10px_rgba(3,25,81,0.22)] hover:bg-[#092f72]"
                  : "bg-white text-[#12449d] shadow-[0_4px_10px_rgba(8,31,87,0.16)] hover:bg-[#edf4ff]"
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

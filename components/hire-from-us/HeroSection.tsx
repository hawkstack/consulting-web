import { HeroSectionData } from "@/app/types/hire-from-us/hire-from-us";
import Image from "next/image";

interface HeroSectionProps {
  data: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { title, description, buttonText, image } = data;

  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-[42px] xl:px-[72px] py-10 md:py-14 lg:py-20">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-4 xl:gap-4">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="max-w-[720px] text-[32px] font-bold leading-[38px] text-[#0048FF] md:text-[30px] lg:leading-[46px] lg:text-[34px] xl:text-[44px] xl:leading-[52px] xl:whitespace-nowrap">
              {title}
            </h1>

            <p className=" mt-2 md:mt-0 lg:mt-4 xl:mt-6 max-w-[630px] text-[12px] lg:text-[14px] leading-[22px] md:leading-[20px] text-[#202B3F] xl:text-[16px] lg:leading-[26px] xl:leading-[32px]">
              {description}
            </p>

            <button className="mt-6 xl:mt-8 h-[34px] lg:h-[48px] rounded-[8px] bg-[#0048FF] px-3 lg:px-4 xl:px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:opacity-90">
              {buttonText}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex flex-1 justify-center md:justify-end">
            <Image
              src={image}
              alt={title}
              width={520}
              height={320}
              priority
              className="h-auto w-full max-w-[300px] object-contain sm:max-w-[360px] md:max-w-[420px] lg:max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

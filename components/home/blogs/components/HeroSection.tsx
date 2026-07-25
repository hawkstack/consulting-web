import Image from "next/image";
import type { BlogHeroData } from "@/components/home/blogs/types/data";

type HeroSectionProps = {
  data: BlogHeroData;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="bg-[#FFFFFF] font-lexend">
      <div className="mx-auto grid min-h-[530px] max-w-[1240px] items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">
        <div className="max-w-[610px] text-center md:justify-self-center lg:justify-self-start lg:text-left">
          <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#191C1E] sm:text-[42px] lg:text-[42px] xl:text-[48px]">
            {data.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[565px] text-[13px] leading-[1.55] text-[#5E5E5E] sm:text-[14px] lg:mx-0 lg:mt-6 lg:text-[14px] xl:text-[15px]">
            {data.description}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[660px] md:max-w-[460px] lg:max-w-[660px] lg:justify-self-end">
          <div className="relative aspect-[1.78/1] overflow-hidden rounded-[18px] shadow-[0_16px_24px_rgba(18,27,43,0.22)] md:aspect-[1.95/1] lg:aspect-[1.78/1]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 660px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 right-[-8px] flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-[0_7px_14px_rgba(23,35,49,0.18)] sm:right-[-18px]">
            <span className="flex size-5 items-center justify-center rounded-full bg-[#12449d] text-[11px] font-bold text-white">
              ✓
            </span>
            <span className="text-[9px] font-semibold text-[#243142] sm:text-[10px]">
              {data.badgeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

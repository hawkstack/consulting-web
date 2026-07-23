import Image from "next/image";
import type { RealWorldImpactData } from "@/components/home/trends-insights/types/trendsInsights";

type RealWorldImpactSectionProps = {
  data: RealWorldImpactData;
};

const RealWorldImpactSection = ({ data }: RealWorldImpactSectionProps) => {
  const {
    title,
    description,
    dashboardImage,
    dashboardImageAlt,
    optimization,
    devOps,
  } = data;

  return (
    <section className="bg-white px-5 py-16 font-lexend sm:px-8 sm:py-20 lg:py-[78px]">
      <div className="mx-auto max-w-[1160px]">
        <header className="mx-auto max-w-[660px] text-center">
          <h2 className="text-[30px] font-semibold tracking-[-0.04em] text-[#1b1e25] sm:text-[34px] md:text-[40px] xl:text-[48px]">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-[610px] text-[13px] leading-[1.55] text-[#3e4350] sm:text-[14px] md:text-[16px] xl:text-[18px]">
            {description}
          </p>
        </header>

        <div className="mt-14 grid items-center gap-9 lg:mt-[72px] md:grid-cols-[1.18fr_.72fr_1fr] lg:gap-10">
          <article className="max-w-[360px] lg:max-w-none">
            <p className="text-[10px] font-semibold tracking-[0.13em] text-[#0755c7] xl:text-[12px]">
              {optimization.eyebrow}
            </p>
            <h3 className="mt-3 max-w-[290px] text-[24px] font-semibold leading-[1.2] tracking-[-0.035em] text-[#20232a] sm:text-[28px] xl:text-[30px]">
              {optimization.title}
            </h3>
            <p className="mt-5 max-w-[330px] text-[13px] leading-[1.55] text-[#373c49] sm:text-[14px] xl:text-[16px]">
              {optimization.description}
            </p>
            <div className="mt-8 flex gap-14 sm:gap-20">
              {optimization.statistics.map((statistic) => (
                <div key={statistic.label}>
                  <p className="text-[19px] font-semibold tracking-[-0.04em] text-[#064ab5] sm:text-[21px] xl:text-[24px]">
                    {statistic.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#555b69] xl:text-[12px]">
                    {statistic.label}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="relative mx-auto aspect-[225/280] w-full max-w-[210px] overflow-hidden rounded-b-lg border border-[#cbd0d9] bg-[#f8f9fb] shadow-[0_10px_16px_rgba(23,35,58,0.16)] lg:max-w-[225px]">
            <Image
              alt={dashboardImageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 225px, 210px"
              src={dashboardImage}
            />
          </div>

          <article className="rounded-[22px] bg-[#1744ab] px-8 py-8 text-white sm:px-10 sm:py-10 md:px-6 md:py-7 lg:min-h-[280px] lg:px-10 lg:py-11">
            <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
              <path d="M5 16.5 8.5 13l2.5 2.5L18.5 8M18.5 8H14m4.5 0v4.5M19 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
            <h3 className="mt-5 text-[22px] font-medium tracking-[-0.03em] sm:text-[24px]">
              {devOps.title}
            </h3>
            <p className="mt-4 max-w-[275px] text-[12px] leading-[1.55] text-[#e5edff] sm:text-[13px] xl:text-[14px]">
              {devOps.description}
            </p>
            <a className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium text-white hover:text-[#c8d9ff]" href="#success-story">
              {devOps.linkLabel}
              <span aria-hidden="true">›</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RealWorldImpactSection;

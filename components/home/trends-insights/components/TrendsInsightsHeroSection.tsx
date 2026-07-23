import type { TrendsInsightsHeroData } from "@/components/home/trends-insights/types/trendsInsights";

type TrendsInsightsHeroSectionProps = {
  data: TrendsInsightsHeroData;
};

const TrendsInsightsHeroSection = ({ data }: TrendsInsightsHeroSectionProps) => {

  return (
    <section className="flex min-h-[640px] w-full flex-col items-center bg-white px-5 pb-10 pt-14 text-center font-lexend sm:px-8 sm:pb-12 sm:pt-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#9ebff5] bg-[#E5EBF6] px-4 py-[6px] text-[12px] font-semibold tracking-[0.12em] text-[#0745ae]">
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5 fill-[#003CA3]"
          viewBox="0 0 16 16"
        >
          <path d="M8 0.8c.43 4.77 1.42 5.76 6.2 6.2-4.78.44-5.77 1.43-6.2 6.2C7.56 8.43 6.57 7.44 1.8 7 6.57 6.56 7.56 5.57 8 .8Zm5.1 9.3c.14 1.55.46 1.87 2 2-.04 0-.13.01-.17.02-1.42.16-1.7.5-1.83 1.98-.14-1.55-.46-1.87-2-2 1.54-.13 1.86-.45 2-2Z" />
        </svg>
        {data.eyebrow}
      </span>

      <h1 className="mt-[50px] text-[36px] font-semibold leading-none tracking-[-0.045em] text-[#17191e] sm:text-[44px] md:text-[48px]">
        {data.title.prefix}
        <span className="text-[#003CA3]">{data.title.highlight}</span>
      </h1>

      <p className="mt-[28px] max-w-[650px] text-[16px] font-normal leading-[1.8] text-[#434654] sm:text-[17px] md:text-[19px]">
        {data.description}
      </p>

      <div className="mt-[78px]">
        <p className="text-[14px] font-semibold text-[#17191e]">
          {data.curatedForLabel}
        </p>
        <div className="mt-[13px] flex flex-wrap justify-center gap-2">
          {data.audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-lg border border-[#dce0e7] bg-[#f0f2f5] px-4 py-[6px] text-[12px] font-semibold text-[#434654]"
            >
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[20px] md:mt-auto flex flex-col items-center">
        <p className="text-[12px] font-medium tracking-[0.18em] text-[#a3a5aa]">
          {data.scrollLabel}
        </p>
        <svg
          aria-hidden="true"
          className="mt-1 h-4 w-4 text-[#a3a5aa]"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="m3 5.5 5 5 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default TrendsInsightsHeroSection;

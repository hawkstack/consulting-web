import type { TechnologyInsightsNewsletterData } from "@/components/home/trends-insights/types/trendsInsights";

type TechnologyInsightsNewsletterSectionProps = {
  data: TechnologyInsightsNewsletterData;
};

const TechnologyInsightsNewsletterSection = ({
  data,
}: TechnologyInsightsNewsletterSectionProps) => {
  return (
    <section className="bg-[#f3f6f8] px-5 py-10 font-lexend sm:px-8 sm:py-12 lg:px-10 lg:py-[46px] xl:py-[80px]">
      <div className="mx-auto grid max-w-[1160px] gap-8 rounded-[20px] bg-white px-6 py-10 shadow-[0_22px_22px_rgba(18,27,43,0.2)] sm:px-8 lg:grid-cols-[448px_minmax(0,1fr)] lg:items-center lg:gap-6 lg:px-[25px] lg:pb-[43px] lg:pt-[87px]">
        <div className="max-w-[420px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#171b29] lg:text-[34px] xl:text-[38px]">
            {data.title.prefix}
            <span className="text-[#0051D5]">{data.title.highlight}</span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#0a54d6] lg:mt-[18px]" />
          <p className="mt-6 text-[15px] leading-[1.38] text-[#596b88] lg:mt-[35px] lg:text-[18px] xl:text-[20px]">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {data.statistics.map((statistic) => {
            const Icon = statistic.icon;

            return (
              <article
                className="flex min-h-[210px] flex-col items-center rounded-[16px] border border-[#edf0f4] px-3 py-5 text-center shadow-[0_1px_2px_rgba(18,27,43,0.02)] lg:min-h-[308px] lg:px-4 lg:py-5"
                key={statistic.label}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf4ff] text-[#0051D5] lg:h-[54px] lg:w-[54px]">
                  <span className="lg:scale-[1.25]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                </span>
                <p className="mt-4 text-[22px] font-semibold leading-none tracking-[-0.035em] text-[#0051D5] lg:mt-[30px] lg:text-[26px] xl:text-[30px]">
                  {statistic.value}
                </p>
                <p className="mt-[7px] whitespace-nowrap text-[10px] font-semibold leading-none tracking-[-0.035em] text-[#192135] lg:text-[12px] xl:text-[14px]">
                  {statistic.label}
                </p>
                <div className="mt-4 h-px w-7 bg-[#a9c5f8] lg:mt-[19px] lg:w-8" />
                <p className="mt-4 max-w-[130px] text-[11px] leading-[1.38] text-[#526886] lg:mt-[19px] lg:max-w-[150px] lg:text-[12px] xl:text-[15px]">
                  {statistic.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyInsightsNewsletterSection;

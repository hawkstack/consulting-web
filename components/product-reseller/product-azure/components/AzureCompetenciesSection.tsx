import type { AzureCompetenciesData } from "../types/azure";

type AzureCompetenciesSectionProps = {
  data: AzureCompetenciesData;
};

export default function AzureCompetenciesSection({
  data,
}: AzureCompetenciesSectionProps) {
  return (
    <section className="bg-white px-8 py-10 text-[#050505] md:px-12 md:py-14 lg:px-12 lg:py-20 xl:px-[68px]">
      <div className="mx-auto w-full max-w-[1254px] ">
        <div className="text-center">
          <h2 className="hidden text-[28px] font-bold leading-tight tracking-normal md:block lg:text-[36px]">
            {data.title}
          </h2>
          <h2 className="text-center text-[14px] font-bold leading-tight tracking-normal md:hidden">
            {data.mobileTitle}
          </h2>
          <p className="mx-auto mt-4 hidden max-w-[645px] text-[13px] leading-[1.55] text-[#2D3748] md:block lg:text-[14px] xl:text-[16px]">
            {data.description}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-[30px]">
          {data.cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className=" min-h-[88px] rounded-[8px] border border-[#D4E3FF] bg-[#F8FBFF] px-[18px] py-[12px] md:min-h-[158px] md:px-8 md:py-6 lg:min-h-[220px]">
                <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-[#DCEBFF] md:h-11 md:w-11 md:rounded-[7px]">
                  <Icon className="h-[10px] w-auto md:h-5" />
                </div>

                <h3 className="mt-3 max-w-[180px] text-[13px] font-bold leading-[1.18] tracking-normal md:mt-4 md:text-[18px] lg:text-[20px] xl:text-[24px]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.5] text-[#334155] md:mt-4 md:text-[12px] md:leading-[1.65] lg:text-[13px] xl:text-[16px]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

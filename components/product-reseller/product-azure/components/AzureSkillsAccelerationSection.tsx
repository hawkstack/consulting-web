import type { AzureSkillsAccelerationData } from "../types/azure";

type AzureSkillsAccelerationSectionProps = {
  data: AzureSkillsAccelerationData;
};

export default function AzureSkillsAccelerationSection({
  data,
}: AzureSkillsAccelerationSectionProps) {
  return (
    <section className="bg-white px-8 py-9 text-[#050505] md:px-12 md:py-12 lg:px-12 lg:py-14 xl:px-[68px] xl:py-[86px]">
      <div className="mx-auto w-full max-w-[1254px]">
        <div className="relative overflow-hidden rounded-[8px] border border-[#D4E3FF] border-t-[#BFD7FF] bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_58%,#F8FBFF_100%)] px-5 py-8 md:rounded-[18px] md:px-4 md:pb-[56px] md:pt-[52px] lg:px-[76px] lg:pb-[54px] lg:pt-[58px] xl:px-[76px] xl:pb-[46px] xl:pt-[64px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-[linear-gradient(180deg,rgba(96,165,250,0.22)_0%,rgba(219,234,254,0.22)_34%,rgba(248,251,255,0)_100%)]" />
          <div className="relative mx-auto max-w-[700px] text-center">
            <h2 className="text-[21px] font-bold leading-[1.18] tracking-normal md:text-[34px] md:leading-[1.12] lg:text-[39px] xl:text-[42px]">
              {data.title}
            </h2>
            <p className="mx-auto md:px-5 mt-5 max-w-[650px] text-[9px] leading-[1.55] text-[#334155] md:text-[13px] md:leading-[1.55] lg:text-[14px] xl:text-[15px]">
              {data.description}
            </p>
          </div>

          <div className="relative mt-7 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-0 lg:mt-12 xl:mt-[68px]">
            {data.pillars.map((pillar) => (
              <article
                key={pillar.step}
                className="rounded-[8px] border border-[#D4E3FF] bg-[#F8FBFF] px-4 py-4 md:min-h-[200px] md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:border-[#E8EEF8] md:bg-transparent md:px-8 md:py-0 lg:min-h-[216px] lg:px-10 xl:px-12 last:md:border-r-0">
                <div className="text-[31px] font-bold leading-none text-[#DCEAFF] md:text-[34px] lg:text-[39px] xl:text-[42px]">
                  {pillar.step}
                </div>
                <h3
                  aria-label={pillar.title}
                  className="mt-3 text-[13px] font-bold leading-[1.25] tracking-normal md:text-[23px] md:leading-[1.15] lg:text-[27px] xl:text-[30px]">
                  <span className="md:hidden">{pillar.title}</span>
                  <span aria-hidden="true" className="hidden md:inline">
                    {pillar.desktopTitle}
                  </span>
                </h3>
                <p className="mt-5 max-w-[260px] text-[10px] leading-[1.55] text-[#1F2937] md:max-w-[230px] md:text-[12px] md:leading-[1.55] lg:max-w-[255px] lg:text-[13px] xl:text-[14px]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

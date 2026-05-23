import type { AppModernizationWhyHawkStackSectionContent } from "@/app/types/app-modernization";

export default function WhyHawkStackSection({
  content,
}: {
  content: AppModernizationWhyHawkStackSectionContent;
}) {
  return (
    <section className="bg-[#020618] font-lexend text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-8 md:py-12 xl:px-6 xl:py-14">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[320px] text-center md:max-w-[560px] lg:max-w-[860px]">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px] xl:text-[16px]">
              {content.badge}
            </span>

            <h2 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-white md:text-[22px] lg:text-[30px]">
              {content.title}
            </h2>

            <p className="mt-4 text-[12px] font-normal leading-[1.7] text-[#D5DAE7] md:mx-auto md:max-w-[620px] md:text-[16px] lg:max-w-[980px] lg:text-[20px]">
              {content.description}
            </p>
          </div>

          <div className="mt-6 mx-auto grid max-w-[300px] grid-cols-1 gap-3 md:mt-5 md:max-w-[460px] md:gap-2.5 lg:mt-6 lg:max-w-[500px] lg:gap-3">
            {content.points.map((point) => (
              <div
                key={point}
                className="flex min-h-[30px] items-center justify-center rounded-[10px] border border-[#2A3048] bg-[#171C2F] px-4 py-2 text-center text-[11px] font-[800px] leading-[1.3] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:min-h-[29px] md:text-[16px] lg:min-h-[34px] lg:text-[18px]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

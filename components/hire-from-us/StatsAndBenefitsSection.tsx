import { StatsAndBenefitsSectionData } from "@/app/types/hire-from-us/hire-from-us";

interface StatsAndBenefitsSectionProps {
  data: StatsAndBenefitsSectionData;
}

export default function StatsAndBenefitsSection({
  data,
}: StatsAndBenefitsSectionProps) {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-14">
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[440px_1fr]">
          {/* Left Card */}
          <div className="rounded-[28px] border border-[#DCE4F5] bg-[#F8FAFF] p-6 md:p-5 lg:p-6 xl:p-10">
            <span className="block text-[10px] font-bold uppercase tracking-[2px] text-[#0048FF] md:text-xs">
              {data.badge}
            </span>

            <div className="mt-2 text-[56px] font-semibold leading-none text-[#0048FF] md:text-[42px] lg:text-[52px] xl:text-[64px]">
              {data.statNumber}
            </div>

            <h2 className="mt-2 max-w-[320px] text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0048FF] md:text-[24px] lg:text-[28px] xl:text-[40px]">
              {data.title}
            </h2>

            <p className="mt-5 max-w-[300px] text-[14px] leading-[1.7] text-[#344054] md:text-[13px] lg:text-[14px] xl:text-[15px]">
              {data.description}
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-[20px] border border-[#DCE4F5] bg-white p-4 md:p-4 lg:p-5 xl:p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#0048FF] text-[14px] font-semibold text-white md:h-[36px] md:w-[36px] md:text-[13px] lg:h-[40px] lg:w-[40px] lg:text-[14px] xl:h-[44px] xl:w-[44px] xl:text-[16px]">
                  {step.stepNumber}
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold text-[#101828] md:text-[13px] lg:text-[15px] xl:text-[18px]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] leading-[1.6] text-[#667085] md:text-[11px] lg:text-[12px] xl:mt-2 xl:text-[14px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

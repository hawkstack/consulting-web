import type {
  AppModernizationProcessItem,
  AppModernizationProcessSectionContent,
} from "@/app/types/app-modernization";

function sortSteps(
  steps: AppModernizationProcessItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder"
) {
  return [...steps].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

function StepCard({ step }: { step: AppModernizationProcessItem }) {
  return (
    <article className="flex flex-col items-center text-center md:block md:text-left">
      <div className="flex min-h-[28px] w-full max-w-[238px] items-center justify-center rounded-[11px] border border-[#DEE6F0] bg-white px-[12px] py-[5px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] md:min-h-[31px] md:max-w-none md:justify-start md:gap-3 md:px-[15px] md:py-[10px] lg:min-h-[28px] lg:gap-[18px] lg:rounded-[10px] lg:px-[12px] lg:py-[6px]">
        <span className="hidden text-[18px] font-medium leading-none text-[#008DFF] md:hidden lg:text-[36px]">
          {step.stepNumber}
        </span>
        <span className="hidden text-[18px] font-medium leading-none text-[#008DFF] md:inline lg:text-[32px]">
          {step.stepNumber}
        </span>
        <h3 className="text-[18px] font-semibold leading-[1.15] text-[#008DFF] md:text-[18px] md:text-[#0F172A] lg:text-[18px]">
          {step.title}
        </h3>
      </div>

      <p className="mb-2 max-w-[260px] px-[12px] pt-[8px] text-[12px] font-normal leading-[1.35] text-[#7A7A7A] md:max-w-none md:px-[8px] md:pt-[8px] md:text-[16px] md:text-[#2F3747] lg:px-[10px] lg:pt-[8px] lg:text-[16px]">
        {step.description}
      </p>
    </article>
  );
}

export default function ProcessSection({
  content,
}: {
  content: AppModernizationProcessSectionContent;
}) {
  const mobileSteps = sortSteps(content.steps, "mobileOrder");
  const tabletSteps = sortSteps(content.steps, "tabletOrder");
  const desktopSteps = sortSteps(content.steps, "desktopOrder");

  return (
    <section className="font-lexend bg-[#F8F9FB]">
      <div className="mx-auto max-w-[1280px] px-4 pb-10 md:px-8 md:pb-12 xl:px-6 xl:pb-14">
        <div className="mx-auto max-w-[1160px] md:max-w-[600px] xl:max-w-[1160px]">
          <div className="mx-auto max-w-[285px] text-center md:max-w-[470px] lg:mx-0 lg:max-w-[620px] lg:text-left">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px] xl:text-[16px]">
              {content.badge}
            </span>

            <h2 className="mt-3 mb-6 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#0F172A] md:text-[24px] lg:max-w-[560px] lg:text-[30px]">
              {content.title}
            </h2>
          </div>

          <div className="mt-[18px] grid grid-cols-1 gap-y-[24px] md:hidden">
            {mobileSteps.map((step) => (
              <StepCard key={`mobile-${step.stepNumber}-${step.title}`} step={step} />
            ))}
          </div>

          <div className="mt-[18px] hidden grid-cols-1 gap-y-[12px] md:grid lg:hidden">
            {tabletSteps.map((step) => (
              <StepCard key={`tablet-${step.stepNumber}-${step.title}`} step={step} />
            ))}
          </div>

          <div className="mt-[14px] hidden grid-cols-2 gap-x-[20px] gap-y-[10px] lg:grid">
            {desktopSteps.map((step) => (
              <StepCard key={`desktop-${step.stepNumber}-${step.title}`} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

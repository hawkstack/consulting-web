import type {
  ConsultingEngagementStepItem,
  ConsultingServicesEngagementModelSectionContent,
} from "@/app/types/consulting-services";

import EngagementStepCard from "@/components/consulting-services/EngagementStepCard";

function sortSteps(
  steps: ConsultingEngagementStepItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder",
) {
  return [...steps].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

export default function EngagementModelSection({
  content,
}: {
  content: ConsultingServicesEngagementModelSectionContent;
}) {
  const mobileSteps = sortSteps(content.steps, "mobileOrder");
  const tabletSteps = sortSteps(content.steps, "tabletOrder");
  const desktopSteps = sortSteps(content.steps, "desktopOrder");

  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:py-[52px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[320px] text-center md:max-w-[760px] lg:max-w-[820px] xl:mx-0 xl:max-w-[780px] xl:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0A8BFF] md:text-[12px] xl:text-[12px]">
              {content.badge}
            </p>

            <h2 className="mt-3 text-[22px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#17233A] md:text-[48px] lg:text-[38px] xl:max-w-[690px] xl:text-[46px]">
              {content.title}
            </h2>

            <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-[1.8] text-[#596579] md:max-w-[720px] md:text-[18px] lg:max-w-[760px] lg:text-[20px] xl:mx-0 xl:max-w-[700px] xl:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:hidden">
            {mobileSteps.map((step) => (
              <EngagementStepCard
                key={`mobile-${step.stepLabel}`}
                step={step}
              />
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-2 gap-5 md:grid xl:hidden">
            {tabletSteps.map((step) => (
              <EngagementStepCard
                key={`tablet-${step.stepLabel}`}
                step={step}
              />
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-4 gap-4 xl:grid">
            {desktopSteps.map((step) => (
              <EngagementStepCard
                key={`desktop-${step.stepLabel}`}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

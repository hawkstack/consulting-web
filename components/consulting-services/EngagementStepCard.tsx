import type { ConsultingEngagementStepItem } from "@/app/types/consulting-services";

type EngagementStepCardProps = {
  step: ConsultingEngagementStepItem;
};

export default function EngagementStepCard({
  step,
}: EngagementStepCardProps) {
  return (
    <article className="rounded-[18px] bg-[#0D172A] px-5 py-5 text-white shadow-[0_20px_45px_rgba(11,23,42,0.18)] md:rounded-[22px] md:px-6 md:py-6 lg:min-h-[242px] lg:px-6 lg:py-6 xl:min-h-[180px] xl:rounded-[18px] xl:px-5 xl:py-5">
      <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#39B5FF]">
        {step.stepLabel}
      </p>

      <h3 className="mt-4 text-[20px] font-[600px] leading-[1.15] tracking-[-0.03em] text-white md:text-[30px] lg:text-[24px] xl:mt-3 xl:text-[24px]">
        {step.title}
      </h3>

      <p className="mt-4 max-w-[29ch] text-[16px] leading-[1.72] text-[#D6DFEC] md:max-w-[32ch] md:text-[16px] lg:max-w-[36ch] lg:text-[20px] xl:mt-3 xl:max-w-[26ch] xl:text-[15px] xl:leading-[1.65]">
        {step.description}
      </p>
    </article>
  );
}

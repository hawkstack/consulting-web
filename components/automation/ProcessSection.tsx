import type { AutomationProcessSectionContent } from "@/app/types/automation";

function ProcessCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[22px] bg-white px-[18px] py-[18px] shadow-[0_18px_42px_rgba(198,226,255,0.9)] ring-1 ring-[#EFF5FF] md:rounded-[22px] md:px-[18px] md:py-[18px] lg:min-h-[160px] lg:rounded-[20px] lg:px-[20px] lg:py-[18px]">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#DCE9FF] text-[16px] font-semibold leading-none text-[#7CABFF]">
        {number}
      </div>

      <h3 className="mt-[18px] text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#111111] md:mt-[10px] md:text-[21px] lg:mt-[18px] lg:text-[21px]">
        {title}
      </h3>

      <p className="mt-[10px] max-w-[33ch] text-[12px] leading-[1.72] text-[#4F5562] md:max-w-[60ch] md:text-[16px] md:leading-[1.75] lg:max-w-[33ch] lg:text-[16px]">
        {description}
      </p>
    </article>
  );
}

export default function ProcessSection({
  content,
}: {
  content: AutomationProcessSectionContent;
}) {
  return (
    <section className="bg-[#FDFDFD] font-lexend">
      <div className="px-4 py-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-20">
        <div className="mx-auto max-w-[285px] md:max-w-[640px] lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-[18px] md:hidden">
            {content.steps.map((step) => (
              <ProcessCard
                key={`mobile-${step.number}`}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="hidden grid-cols-1 gap-y-[20px] md:grid lg:hidden">
            {content.steps.map((step) => (
              <ProcessCard
                key={`tablet-${step.number}`}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="hidden grid-cols-3 gap-x-[14px] lg:grid">
            {content.steps.map((step) => (
              <ProcessCard
                key={`desktop-${step.number}`}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

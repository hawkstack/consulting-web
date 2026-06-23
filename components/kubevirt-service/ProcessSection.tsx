import type { KubevirtProcessSectionContent } from "@/app/types/kubevirt-service";
import GetStarted from "@/components/kubevirt-service/GetStarted";

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
    <article className="min-h-[84px] rounded-[20px] border border-white/8 bg-[#0F1325] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:min-h-[176px] md:rounded-[18px] md:px-5 md:py-5 xl:min-h-[138px] xl:px-4 xl:py-4">
      <p className="text-[20px] font-medium leading-none tracking-[-0.04em] text-[#59E6FF] md:text-[16px] xl:text-[14px]">
        {number}
      </p>

      <h3 className="mt-3 text-[17px] font-semibold leading-[1.2] tracking-[-0.04em] text-white md:mt-2 md:text-[31px] xl:mt-1 xl:text-[28px]">
        {title}
      </h3>

      <p className="mt-0 hidden text-[16px] leading-[1.7] tracking-[-0.01em] text-[#C6CDDA] md:mt-2 md:block xl:mt-2 xl:text-[15px]">
        {description}
      </p>
    </article>
  );
}

type ProcessSectionProps = {
  content: KubevirtProcessSectionContent;
};

export default function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className="bg-[#020617] font-lexend text-white">
      <div className="px-4 py-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-[340px] text-center md:max-w-[760px] xl:mx-0 xl:max-w-[780px] xl:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#59E6FF] md:text-[12px] xl:text-[11px]">
              {content.badge}
            </p>

            <h2 className="mt-2 text-[28px] font-semibold leading-[1.04] tracking-[-0.05em] text-white md:text-[46px] xl:max-w-[420px] xl:text-[52px]">
              {content.title}
            </h2>

            <p className="mx-auto mt-3 max-w-[320px] text-[16px] leading-[1.7] tracking-[-0.01em] text-[#C6CDDA] md:max-w-[700px] xl:mx-0 xl:mt-4 xl:max-w-[720px] xl:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-9 md:gap-4 xl:grid-cols-4 xl:gap-5">
            {content.steps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <GetStarted content={content.cta} />
        </div>
      </div>
    </section>
  );
}

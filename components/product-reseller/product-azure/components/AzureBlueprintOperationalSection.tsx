import { azureBlueprintOperationalData } from "../data/azure";
import type { AzureBlueprintOperationalData } from "../types/azure";

type AzureBlueprintOperationalSectionProps = {
  data?: AzureBlueprintOperationalData;
};

const StepIcon = ({ Icon }: { Icon: AzureBlueprintOperationalData["steps"][number]["icon"] }) => {
  return (
    <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-white/20 bg-[#0759D8] shadow-[0_0_13px_rgba(255,255,255,0.62)] md:h-[58px] md:w-[58px] lg:h-[56px] lg:w-[56px]">
      <Icon />
    </span>
  );
};

export default function AzureBlueprintOperationalSection({
  data = azureBlueprintOperationalData,
}: AzureBlueprintOperationalSectionProps) {
  return (
    <section className="bg-[#0759D8] px-5 py-[68px] text-white min-[480px]:px-8 min-[480px]:pb-[66px] min-[480px]:pt-[84px] md:px-12 lg:px-[68px] lg:pb-[86px] lg:pt-[88px]">
      <div className="mx-auto w-full max-w-[1254px]">
        <div className="hidden text-center min-[480px]:block">
          <h2 className="mx-auto max-w-[540px] text-[31px] font-bold leading-[1.26] tracking-normal lg:max-w-none lg:text-[30px] lg:leading-[1.15] xl:text-[36px]">
            {data.title}
          </h2>
          <div className="mx-auto mt-[18px] h-[3px] w-[84px] rounded-full bg-white/95 lg:mt-[19px]" />
        </div>

        <div className="relative mx-auto mt-[70px] hidden max-w-[1240px] min-[480px]:block lg:mt-[70px]">
          <div className="pointer-events-none absolute left-0 right-0 top-[78px] h-px bg-white/15 min-[480px]:top-[111px] lg:top-[79px]" />
          <div className="relative grid grid-cols-3 text-center">
            {data.steps.map((step) => (
              <article key={step.step} className="mx-auto w-full max-w-[390px]">
                <div className="flex justify-center">
                  <StepIcon Icon={step.icon} />
                </div>
                <h3 className="mt-6 text-[22px] font-bold leading-[1.15] lg:mt-6">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[126px] text-[15px] leading-[1.43] text-white/92 min-[700px]:max-w-[235px] lg:max-w-[296px] xl:text-[16px]">
                  {step.desktopDescription}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-[58px] min-[480px]:hidden">
          {data.steps.map((step) => (
            <article key={step.step} className="grid grid-cols-[38px_1fr] gap-4 text-white">
              <span className="flex h-[43px] w-[25px] items-center justify-center rounded-full border border-white bg-[#0759D8] text-[13px] font-bold leading-none shadow-[0_4px_10px_rgba(0,33,93,0.28)]">
                {step.step}
              </span>
              <div>
                <h3 className="text-[20px] font-bold leading-[1.2]">{step.title}</h3>
                <p className="mt-2 max-w-[230px] text-[15px] leading-[1.45] text-white/94">
                  {step.mobileDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

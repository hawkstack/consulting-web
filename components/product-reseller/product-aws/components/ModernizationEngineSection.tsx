import type { ProductAwsModernizationEngineContent } from "../types/product-aws";
import CurrentStateIcon from "@/components/icons/product-reseller/product-aws/CurrentStateIcon";
import ModernizationLightningIcon from "@/components/icons/product-reseller/product-aws/ModernizationLightningIcon";
import TargetStateIcon from "@/components/icons/product-reseller/product-aws/TargetStateIcon";

type ModernizationEngineSectionProps = {
  content: ProductAwsModernizationEngineContent;
};

const ModernizationEngineSection = ({
  content,
}: ModernizationEngineSectionProps) => {
  return (
    <section className="bg-[#f5f7fb] px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[24px] bg-[#121c31] px-5 py-14 text-white sm:px-10 lg:min-h-[620px] lg:px-20 lg:py-[90px]">
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.025em] sm:text-[34px] lg:text-[42px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[660px] text-[13px] leading-[1.65] text-[#7f8ba3] sm:text-[14px] lg:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1050px] grid-cols-1 items-center gap-8 md:grid-cols-[1fr_150px_1fr] lg:mt-[68px]">
          <article className="min-h-[250px] rounded-[14px] border border-[#344057] bg-[#202a3e] px-7 py-8 sm:px-9">
            <h3 className="text-[10px] font-medium tracking-[0.2em] text-[#a9b1c0]">
              CURRENT STATE
            </h3>
            <ul className="mt-6 space-y-[17px]">
              {content.currentState.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[13px] text-[#c3cad6] sm:text-[14px]"
                >
                  <CurrentStateIcon className="h-[14px] w-[14px] shrink-0 text-[#ff2525]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div
            className="flex flex-col items-center self-stretch"
            aria-hidden="true"
          >
            <div className="h-10 w-px bg-gradient-to-b from-transparent to-[#0749a6] md:hidden" />
            <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#1764df] shadow-[0_0_26px_rgba(23,100,223,0.15)]">
              <ModernizationLightningIcon className="h-7 w-7 text-white" />
            </div>
            <div className="min-h-10 flex-1 w-px bg-gradient-to-b from-[#0750b9] to-transparent md:min-h-[85px]" />
          </div>

          <article className="min-h-[250px] rounded-[14px] border border-[#064093] bg-[#10213f] px-7 py-8 shadow-[0_0_35px_rgba(0,74,190,0.08)] sm:px-9">
            <h3 className="text-[10px] font-medium tracking-[0.2em] text-[#0877ff]">
              TARGET STATE
            </h3>
            <ul className="mt-6 space-y-[17px]">
              {content.targetState.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[13px] text-[#d1d7e1] sm:text-[14px]"
                >
                  <TargetStateIcon className="h-[14px] w-[14px] shrink-0 text-[#0877ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ModernizationEngineSection;

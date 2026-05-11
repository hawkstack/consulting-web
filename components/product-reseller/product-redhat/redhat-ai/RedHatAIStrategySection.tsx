// "use client";
import { RedHatAIStrategySectionData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface Props {
  data: RedHatAIStrategySectionData;
}

const RedHatAIStrategySection = ({ data }: Props) => {
  const { tag, heading, description, cards } = data;

  return (
    <section className="w-full bg-[#F4F4F4] py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full px-4 md:w-[620px] md:px-0 lg:w-[920px] xl:w-[1180px]">
        {/* top content */}
        <div className="mx-auto max-w-[790px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[2.5px] text-[#EE0000] text-xs xl:text-sm">
            {tag}
          </p>

          <h2 className="mx-auto max-w-[920px] text-[28px] font-bold leading-tight text-[#151515] text-[22px] md:text-[30px] lg:text-[36px] xl:text-[48px]">
            {heading}
          </h2>

          <p className="mx-auto mt-4 text-xs leading-relaxed text-[#666666] md:text-sm lg:text-lg">
            {description}
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4 ">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="rounded-2xl border border-[#E7E7E7] bg-white p-5 md:min-h-[190px] md:p-4 lg:p-5"
              >
                {/* icon */}
                <div className="flex md:h-[30px] md:w-[30px] lg:h-[34px] lg:w-[34px] xl:h-[40px] xl:w-[40px] items-left">
                  <Icon />
                </div>

                {/* title */}
                <h3 className="mt-5 lg:mt-3 xl:mt-5 text-sm font-bold text-[#111111] md:text-base lg:text-xl">
                  {card.title}
                </h3>

                {/* description */}
                <p className="mt-3 leading-snug text-[#666666] text-[12px] lg:text-[14px] xl:text-base">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RedHatAIStrategySection;

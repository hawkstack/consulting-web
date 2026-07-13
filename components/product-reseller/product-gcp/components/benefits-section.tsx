import type { ProductGcpBenefitsContent } from "../types/product-gcp";

type ProductGcpBenefitsSectionProps = {
  content: ProductGcpBenefitsContent;
};

export default function ProductGcpBenefitsSection({
  content,
}: ProductGcpBenefitsSectionProps) {
  return (
    <section className="bg-[#131B2E]">
      <div className="mx-auto grid max-w-[1260px] items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(300px,1fr)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-14 lg:px-10 lg:py-[76px] xl:grid-cols-[1fr_520px] xl:gap-20">
        <div className="max-w-[560px] text-center md:text-left">
          <h2 className="text-[22px] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#f1f3f7] sm:text-[30px] lg:text-[40px] xl:text-[56px] md:text-left">
            {content.title}
            <span className="block text-[#2dd4f3]">
              {content.highlightedTitle}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[430px] text-center text-[12px] leading-[1.55] text-[#c3c8d5] md:mx-0 md:text-left md:text-[14px] lg:text-[15px] xl:text-[18px]">
            {content.description}
          </p>
        </div>

        <div className="space-y-2.5 lg:space-y-3">
          {content.benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="flex min-h-[56px] items-center gap-3 rounded-[10px] border border-[#28344a] bg-[#1a253a] px-3 py-2.5 lg:min-h-[64px] lg:gap-3.5 lg:px-[17px] lg:py-3.5"
              >
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[5px] bg-[#26334a] p-[4px] text-[#d4dbea] lg:h-[26px] lg:w-[26px] lg:p-[5px]">
                  <Icon className="h-full w-full" />
                </span>
                <div>
                  <h3 className="text-[11px] font-bold leading-[1.2] text-[#f0f2f6] lg:text-[12px] xl:text-[18px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-[1.3] text-[#bdc3d0] lg:text-[11px] xl:text-[16px]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

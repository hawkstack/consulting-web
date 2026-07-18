import { MirantisSolutionIcon } from "@/components/product-reseller/product-mirantis/icons";
import type { ProductMirantisSolutionsContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisSolutionsSectionProps = {
  content: ProductMirantisSolutionsContent;
};

export default function ProductMirantisSolutionsSection({
  content,
}: ProductMirantisSolutionsSectionProps) {
  return (
    <section className="bg-[#FDFEFF] px-5 pb-10 pt-1 font-lexend text-[#070B16] sm:px-8 md:pb-14 md:pt-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-[1195px] rounded-[24px] bg-[#E8F5FF] px-6 py-8 sm:max-w-[646px] sm:px-8 sm:py-9 md:max-w-[720px] md:rounded-[22px] md:px-8 md:py-9 lg:max-w-[1275px] lg:rounded-[26px] lg:px-9 lg:py-12">
        <div className="flex flex-col items-center gap-2 border-b border-[#C9DBEA] pb-5 text-center md:flex-row md:justify-between md:gap-6 md:pb-5 md:text-left lg:pb-6">
          <h2 className="order-2 text-[22px] font-semibold leading-tight md:order-1 md:text-[20px] lg:text-[28px]">
            {content.title}
          </h2>
          <p className="order-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0D3977] md:order-2 md:text-[8px] lg:text-[10px]">
            {content.eyebrow}
          </p>
        </div>

        <div className="mt-5 grid gap-3 md:mt-7 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4 lg:gap-6">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="min-h-[78px] rounded-[8px] border border-[#C5D1DE] bg-white px-4 py-4 md:min-h-[162px] md:px-4 md:py-4 lg:min-h-[220px] lg:px-4 lg:py-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#F1F7FF] text-[#0D3977] md:h-9 md:w-9 lg:h-10 lg:w-10">
                <MirantisSolutionIcon
                  icon={card.icon}
                  className="h-7 w-7 md:h-6 md:w-6 lg:h-7 lg:w-7"
                />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold leading-[1.24] md:mt-4 md:text-[16px] lg:text-[19px]">
                {card.title}
              </h3>
              <p className="mt-2 hidden text-[12px] leading-[1.55] text-[#333B4D] md:block md:text-[10px] lg:text-[13px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

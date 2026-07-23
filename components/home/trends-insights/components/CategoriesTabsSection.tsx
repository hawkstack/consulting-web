import type { CategoriesTabsData } from "@/components/home/trends-insights/types/trendsInsights";

type CategoriesTabsSectionProps = {
  data: CategoriesTabsData;
};

const CategoriesTabsSection = ({ data }: CategoriesTabsSectionProps) => {
  return (
    <section className="bg-white px-5 pb-[37px] pt-[75px] font-lexend sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-3 lg:gap-10">
        {data.categories.map((category) => {
          const Icon = category.icon;

          return (
            <article
              className="min-h-[228px] border-l-[4px] pl-8 pt-[37px] sm:pl-10 lg:pl-12"
              key={category.title}
              style={{ borderColor: category.accentColor }}
            >
              <Icon className="h-5 w-5" />
              <h2 className="mt-[27px] text-[22px] font-medium leading-[1.15] tracking-[-0.035em] text-[#202228] md:text-[23px] lg:text-[25px]">
                {category.title}
              </h2>
              <p className="mt-[18px] max-w-[310px] text-[15px] md:text-[14px] lg:text-[15px] leading-[1.32] text-[#414553]">
                {category.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesTabsSection;

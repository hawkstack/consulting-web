import type { PartnerCategoriesSectionData } from "@/components/home/partner/types/partner";

type PartnerCategoriesSectionProps = {
  data: PartnerCategoriesSectionData;
};

const PartnerCategoriesSection = ({ data }: PartnerCategoriesSectionProps) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto lg:max-w-[1000px] xl:max-w-[1220px] px-5 sm:px-8">
        <div className="max-w-[760px] mb-12">
          <h2 className="text-[24px] md:text-[30px] xl:text-[40px] font-semibold leading-tight text-[#101828] mb-3">
            {data.heading}
          </h2>
          <p className="text-sm md:text-base text-[#475467] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.categories.map((category) => (
            <div
              key={category.title}
              className="rounded-[24px] bg-[#DAE8FF] px-6 py-8 transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(5,57,146,0.12)] cursor-pointer"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                <category.icon className="h-6 w-6 text-[#0B3D91]" />
              </div>

              <h3 className="text-sm md:text-sm xl:text-base font-semibold text-[#101828] mb-1">
                {category.title}
              </h3>
              <p className="text-xs md:text-sm font-light text-[#434654] tracking-wide">
                {category.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCategoriesSection;

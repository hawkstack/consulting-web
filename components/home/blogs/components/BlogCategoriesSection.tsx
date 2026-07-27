import type { BlogCategoriesData } from "@/components/home/blogs/types/blogs";

type BlogCategoriesSectionProps = {
  data: BlogCategoriesData;
};

const BlogCategoriesSection = ({ data }: BlogCategoriesSectionProps) => {
  return (
    <section className="overflow-hidden bg-[#071A2D] font-lexend text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-14 sm:px-10 md:grid-cols-[0.95fr_1.7fr] md:gap-18 md:py-20 lg:gap-24 lg:px-10 lg:py-24">
        <div>
          <h2 className="text-[24px] font-semibold tracking-[-0.028em] sm:text-[28px] xl:text-[30px]">
            {data.trendingTitle}
          </h2>
          <p className="mt-5 max-w-[330px] text-[12px] leading-[1.6] text-[#b5c3ce] sm:text-[13px] xl:text-[16px]">
            {data.trendingDescription}
          </p>

          <div className="mt-8 flex max-w-[390px] flex-wrap gap-3">
            {data.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-[#19374a] bg-[#071A2D] px-3.5 py-2.5 text-[11px] leading-none text-[#d9e4ed] sm:text-[12px] xl:text-[14px]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-semibold tracking-[-0.028em] sm:text-[28px] xl:text-[30px]">
            {data.blueprintsTitle}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.blueprints.map((blueprint) => {
              const Icon = blueprint.icon;

              return (
                <article
                  key={blueprint.title}
                  className="flex min-h-[108px] items-center gap-5 rounded-2xl border border-[#173549] bg-[#071A2D] px-5 md:px-2 xl:px-5 py-4 md:py-2 xl:py-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[#0b2b41] text-[#a9c2d4]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-[12px] font-medium leading-tight text-[#f3f7fb] sm:text-[13px] xl:text-[14px]">
                      {blueprint.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-[1.4] text-[#aec0cd] sm:text-[11px] xl:text-[14px]">
                      {blueprint.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategoriesSection;

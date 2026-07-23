import Image from "next/image";
import type { LatestTechnicalPerspectivesData } from "@/components/home/trends-insights/types/trendsInsights";

type LatestTechnicalPerspectivesSectionProps = {
  data: LatestTechnicalPerspectivesData;
};

const LatestTechnicalPerspectivesSection = ({
  data,
}: LatestTechnicalPerspectivesSectionProps) => {
  return (
    <section className="bg-[#f7f9fc] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="font-lexend text-[26px] font-semibold tracking-[-0.04em] text-[#172033] sm:text-[34px] xl:text-[48px]">
          {data.title.prefix}
          <span className="text-[#0051D5]">{data.title.highlight}</span>
        </h2>
        <p className="mt-2 max-w-xl font-lexend text-xs leading-relaxed text-[#6B7280] sm:text-sm xl:text-lg">
          {data.description}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-9 lg:gap-5">
          {data.articles.map((article) => (
            <article
              key={article.title}
              className="group flex min-h-[210px] overflow-hidden rounded-2xl bg-white shadow-[0_3px_16px_rgba(16,24,40,0.035)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[225px] lg:min-h-[240px] xl:min-h-[280px]"
            >
              {article.imageSide === "start" && (
                <ArticleImage image={article.image} alt={article.imageAlt} />
              )}
              <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:px-5 lg:px-6">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#eaf2ff] px-2 py-1 font-lexend text-[8px] font-medium leading-none text-[#0051D5] lg:text-[9px] xl:text-[12px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-lexend text-sm font-semibold leading-[1.15] tracking-[-0.025em] text-[#111827] sm:text-base lg:text-lg xl:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-2 font-lexend text-[10px] leading-relaxed text-[#6B7280] lg:text-xs xl:text-sm">
                  {article.description}
                </p>
              </div>
              {article.imageSide === "end" && (
                <ArticleImage image={article.image} alt={article.imageAlt} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleImage = ({ image, alt }: { image: string; alt: string }) => (
  <div className="relative w-[40%] shrink-0 self-stretch overflow-hidden bg-[#f7faff] sm:w-[42%]">
    <Image
      src={image}
      alt={alt}
      fill
      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 21vw, 235px"
      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      quality={100}
    />
  </div>
);

export default LatestTechnicalPerspectivesSection;

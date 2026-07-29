import type { SuccessStoriesData } from "@/components/home/blogs/types/blogs";

type SuccessStoriesSectionProps = {
  data: SuccessStoriesData;
};

const SuccessStoriesSection = ({ data }: SuccessStoriesSectionProps) => {
  return (
    <section className="bg-[#F8FAFC] px-4 py-14 font-lexend sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="text-center text-[19px] font-semibold tracking-[-0.03em] text-[#191C1E] sm:text-[28px] xl:text-[30px]">
          {data.title}
        </h2>

        <div className="mx-auto mt-9 grid max-w-[1180px] gap-4 md:grid-cols-2 lg:mt-12 lg:gap-7">
          {data.stories.map((story) => (
            <article
              key={story.label}
              className="rounded-[10px] border border-[#E4E8EE] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(24,39,75,0.025)] sm:px-7 sm:py-7"
            >
              <span className="inline-flex rounded-sm bg-[#E8F0FF] px-2 py-1 text-[8px] font-semibold tracking-[0.02em] text-[#003CA3] sm:text-[10px] xl:text-[12px]">
                {story.label}
              </span>
              <h3 className="mt-4 max-w-[400px] text-[15px] font-medium leading-[1.25] tracking-[-0.025em] text-[#191C1E] sm:text-[19px] xl:text-[24px]">
                {story.title}
              </h3>
              <p className="mt-5 max-w-[490px] text-[10px] leading-[1.55] text-[#5E5E5E] sm:text-[12px] xl:text-[16px]">
                {story.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-[#191C1E]">
                {story.metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="flex gap-2 text-[9px] leading-[1.45] sm:text-[11px] xl:text-[14px]"
                    >
                      <Icon className="mt-0.5 size-3 shrink-0" />
                      <span>{metric.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#EDF0F3] px-2.5 py-1 text-[8px] leading-none text-[#5E5E5E] sm:text-[10px] xl:text-[12px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;

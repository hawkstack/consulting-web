import type { BlogTopicsData } from "@/components/home/blogs/types/blogs";

type BlogTopicsSectionProps = {
  data: BlogTopicsData;
};

const BlogTopicsSection = ({ data }: BlogTopicsSectionProps) => {
  return (
    <section className="bg-[#FFFFFF] px-4 py-6 font-lexend sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div
          className="flex w-full flex-wrap items-center justify-center gap-2 xl:flex-nowrap xl:justify-between xl:gap-0"
          aria-label="Blog topics"
        >
          {data.topics.map((topic) => (
            <span
              key={topic}
              className="blog-topic-item shrink-0 rounded-full border border-[#C3C6D74D] bg-white px-3 py-1.5 text-[10px] font-medium leading-none text-[#191C1E] shadow-[0_1px_2px_rgba(25,28,31,0.03)] sm:px-4 sm:text-[11px] xl:text-[12px]"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTopicsSection;

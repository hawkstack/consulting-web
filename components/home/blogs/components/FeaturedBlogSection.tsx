import Image from "next/image";
import type { FeaturedBlogData } from "@/components/home/blogs/types/blogs";

type FeaturedBlogSectionProps = {
  data: FeaturedBlogData;
};

const FeaturedBlogSection = ({ data }: FeaturedBlogSectionProps) => {
  return (
    <section className="bg-[#ffffff] px-5 py-14 font-lexend sm:px-8 md:py-20">
      <article className="mx-auto grid max-w-[1160px] overflow-hidden rounded-[24px] bg-[#071A2D] shadow-[0_18px_30px_rgba(18,35,53,0.2)] lg:min-h-[500px] lg:grid-cols-[2fr_1fr]">
        <div className="flex flex-col justify-center px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-12 xl:px-14">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.04em] text-[#c6d0dc] sm:text-[12px]">
            <span className="rounded-full border border-[#19456a] bg-[#0a2a4c] px-4 py-1.5 font-semibold tracking-[0.1em] text-[#afc8ee]">
              {data.eyebrow}
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04167 5.25L5.25 0L8.45833 5.25H2.04167ZM8.45833 11.6667C7.72917 11.6667 7.10938 11.4115 6.59896 10.901C6.08854 10.3906 5.83333 9.77083 5.83333 9.04167C5.83333 8.3125 6.08854 7.69271 6.59896 7.18229C7.10938 6.67188 7.72917 6.41667 8.45833 6.41667C9.1875 6.41667 9.80729 6.67188 10.3177 7.18229C10.8281 7.69271 11.0833 8.3125 11.0833 9.04167C11.0833 9.77083 10.8281 10.3906 10.3177 10.901C9.80729 11.4115 9.1875 11.6667 8.45833 11.6667ZM0 11.375V6.70833H4.66667V11.375H0ZM8.45833 10.5C8.86667 10.5 9.21181 10.359 9.49375 10.0771C9.77569 9.79514 9.91667 9.45 9.91667 9.04167C9.91667 8.63333 9.77569 8.28819 9.49375 8.00625C9.21181 7.72431 8.86667 7.58333 8.45833 7.58333C8.05 7.58333 7.70486 7.72431 7.42292 8.00625C7.14097 8.28819 7 8.63333 7 9.04167C7 9.45 7.14097 9.79514 7.42292 10.0771C7.70486 10.359 8.05 10.5 8.45833 10.5ZM1.16667 10.2083H3.5V7.875H1.16667V10.2083ZM4.1125 4.08333H6.3875L5.25 2.24583L4.1125 4.08333Z"
                  fill="#C3C6D7"
                />
              </svg>

              {data.category}
            </span>
          </div>

          <h2 className="mt-7 max-w-[720px] text-[24px] font-semibold leading-[1.28] tracking-[-0.025em] sm:text-[30px]">
            {data.title}
          </h2>

          <p className="mt-6 max-w-[660px] text-[16px] leading-[1.6] text-[#C3C6D7]">
            {data.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-[#2a4053] bg-[#152b3d] px-4 py-1 text-[11px] xl:text-[12px] font-medium text-[#c4ced8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden bg-[#0697f2] lg:min-h-full">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            className="object-cover opacity-100 mix-blend"
            sizes="(max-width: 1023px) 100vw, 400px"
          />
        </div>
      </article>
    </section>
  );
};

export default FeaturedBlogSection;

import Link from "next/link";
import type { ProductAwsHeroContent } from "../types/product-aws";

type HeroSectionProps = {
  content: ProductAwsHeroContent;
};

const HeroSection = ({ content }: HeroSectionProps) => {
  const renderTitle = (title: string) => {
    const highlight = "AWS Infrastructure";

    if (title.includes(highlight)) {
      const [before, after] = title.split(highlight);

      return (
        <>
          {before}
          <span className="text-[#2357E8]">{highlight}</span>
          {after}
        </>
      );
    }

    return title;
  };

  return (
    <section className="bg-[#F8FAFD]">
      <div className="mx-auto max-w-[1260px] px-5 py-12 md:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_540px]">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-[#DBE1FF] px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#0051D5]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#334155] sm:text-[11px]">
                {content.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[640px] text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-[#111827] md:text-[46px] lg:text-[44px] xl:text-[48px]">
              {renderTitle(content.title)}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[610px] text-base leading-7 text-[#6B7280] lg:text-md xl:text-lg lg:leading-8">
              {content.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={content.secondaryButton.href}
                className="flex h-[52px] w-full items-center justify-center rounded-lg border border-[#D8DEE8] bg-white px-7 text-[14px] xl:text-[15px] font-semibold text-[#111827] transition hover:bg-gray-50 sm:w-auto"
              >
                {content.secondaryButton.label}
              </Link>

              <Link
                href={content.primaryButton.href}
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#0051D5] px-7 text-[14px] xl:text-[15px] font-semibold text-white transition hover:bg-[#1848cf] sm:w-auto"
              >
                {content.primaryButton.label}
                <span className="text-base">🡢</span>
              </Link>
            </div>
          </div>

          {/* RIGHT - Only XL & Above */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-[#DCE5F2] bg-[#F8FAFD] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden rounded-xl bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
                <img
                  src={content.image}
                  alt="AWS Infrastructure"
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

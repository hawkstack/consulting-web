import Link from "next/link";
import type { ProductAwsCtaContent } from "../types/product-aws";

type CtaSectionProps = {
  content: ProductAwsCtaContent;
};

const CtaSection = ({ content }: CtaSectionProps) => {
  return (
    <section className="bg-[#F8FAFD] px-5 py-10 md:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="rounded-[18px] bg-[#050505] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          {/* Heading */}
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-white">
            {content.title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-6 text-[#8B9098]">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={content.primaryButton.href}
              className="inline-flex h-[48px] min-w-[190px] items-center justify-center rounded-md bg-[#0051D5] px-7 text-[14px] font-semibold text-white transition hover:bg-[#0047bd]"
            >
              {content.primaryButton.label}
            </Link>

            <Link
              href={content.secondaryButton.href}
              className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-md border border-[#2C2C2C] bg-transparent px-7 text-[14px] font-semibold text-white transition hover:bg-[#111111]"
            >
              {content.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

import Link from "next/link";
import type { ProductMirantisCtaContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisCtaSectionProps = {
  content: ProductMirantisCtaContent;
};

export default function ProductMirantisCtaSection({
  content,
}: ProductMirantisCtaSectionProps) {
  return (
    <section className="bg-white px-4 pb-10 pt-2 font-lexend text-white sm:px-8 md:pb-12 lg:px-10 lg:pb-14">
      <div className="mx-auto max-w-[454px] rounded-[14px] bg-[#102967] px-7 py-6 text-center sm:max-w-[640px] sm:rounded-[16px] sm:px-8 sm:py-8 md:max-w-[1120px] md:px-9 md:py-8 lg:max-w-[1180px] lg:rounded-[18px] lg:px-12 lg:py-10">
        <h2 className="mx-auto max-w-[1000px] text-[17px] font-semibold leading-[1.15] sm:text-[19px] md:text-[26px] lg:text-[32px]">
          {content.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[820px] text-[11px] leading-[1.45] text-white/55 sm:text-[12px] md:text-[13px] lg:text-[15px]">
          {content.description}
        </p>
        <Link
          href={content.action.href}
          aria-label={content.action.ariaLabel}
          className="mt-6 inline-flex min-h-8 min-w-[128px] items-center justify-center rounded-[4px] bg-white px-5 text-[9px] font-semibold text-[#070B16] transition hover:bg-[#F1F5FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-9 sm:min-w-[150px] sm:text-[10px] md:min-h-10 md:min-w-[170px] md:text-[11px] lg:min-h-11 lg:min-w-[190px] lg:text-[12px]"
        >
          {content.action.label}
        </Link>
      </div>
    </section>
  );
}

import type { ProductGcpCtaContent } from "../types/product-gcp";

type ProductGcpCtaSectionProps = {
  content: ProductGcpCtaContent;
};

export default function ProductGcpCtaSection({
  content,
}: ProductGcpCtaSectionProps) {
  return (
    <section className="bg-[#131B2E] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1180px] rounded-[28px] border border-[#334057] bg-[linear-gradient(115deg,#182238_0%,#151f33_100%)] px-5 py-8 text-center sm:px-10 sm:py-10 lg:px-14 lg:py-11">
        <h2 className="text-[27px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#f0f2f6] sm:text-[30px] lg:text-[34px] xl:text-[56px]">
          {content.title}
          <span className="block text-[#2dd4f3]">
            {content.highlightedTitle}
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-[720px] text-[11px] leading-[1.55] text-[#CBC3D7] sm:text-[12px] lg:text-[13px] xl:text-[18px]">
          {content.description}
        </p>

        <div className="mx-auto mt-8 grid max-w-[920px] grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-3">
          {content.stages.map((stage) => (
            <article
              key={stage.phase}
              className="rounded-[7px] border border-[#303d53] bg-[#222c40] px-3 py-3 sm:min-h-[52px]"
            >
              <p className="text-[8px] xl:text-[12px] font-medium uppercase tracking-[0.1em] text-[#D0BCFF]">
                {stage.phase}
              </p>
              <h3 className="mt-1 text-[11px] xl:text-[16px] font-bold leading-none text-[#E0E3E5] sm:text-[12px]">
                {stage.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { ProductCncfCtaContent } from "@/app/types/product-reseller/product-cncf/product-cncf";

type ProductCncfCtaSectionProps = {
  content: ProductCncfCtaContent;
};

export default function ProductCncfCtaSection({
  content,
}: ProductCncfCtaSectionProps) {
  return (
    <section className="border-b-[5px] border-[#06122A] bg-white px-4 pb-9 pt-1 font-lexend text-[#050918] md:px-8 md:pb-10 md:pt-5 lg:px-8 lg:pb-11 lg:pt-8">
      <div className="mx-auto max-w-[720px] lg:max-w-[1220px] text-center">
        <h2 className="mx-auto max-w-[610px] text-[22px] font-semibold leading-[1.08] tracking-normal md:text-[28px] lg:text-[48px] lg:max-w-[1220px]">
          {content.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[585px] text-[10px] leading-[1.75] text-[#111827] md:text-[12px] lg:text-[16px] lg:max-w-[920px]">
          {content.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {content.actions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
              className={`inline-flex min-h-9 items-center justify-center rounded-full border border-[#38DDF2] px-5 text-[10px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38DDF2] md:min-h-10 lg:min-h-11 md:px-6 md:text-[11px] lg:text-[16px] ${
                index === 0
                  ? "bg-[#42DCEB] text-[#03101B] hover:bg-[#29cada]"
                  : "bg-transparent text-[#38DDF2] hover:bg-[#F3FBFF]"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
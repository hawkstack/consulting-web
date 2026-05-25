import type { ProductCncfKubeVirtPromoContent } from "@/app/types/product-reseller/product-cncf/product-cncf";

type ProductCncfKubeVirtPromoSectionProps = {
  content: ProductCncfKubeVirtPromoContent;
};

export default function ProductCncfKubeVirtPromoSection({
  content,
}: ProductCncfKubeVirtPromoSectionProps) {
  return (
    <>
      <section className="bg-white px-4 py-8 font-lexend text-[#050918] sm:px-6 md:px-8 md:py-6 lg:px-12 lg:py-6 xl:px-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] bg-[#F3F7FF] px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:min-h-[264px] md:grid-cols-[minmax(0,1fr)_minmax(320px,1fr)] md:items-center md:gap-10 md:rounded-[38px] md:px-10 md:py-8 lg:min-h-[265px] lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:gap-14 lg:px-[42px] xl:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] xl:px-[58px]">
          <div className="mx-auto max-w-[310px] text-center md:mx-0 md:max-w-[430px] md:text-left lg:max-w-[500px]">
            <h2 className="text-[23px] font-semibold leading-[1.1] tracking-normal md:text-[24px] lg:text-[40px]">
              {content.title}
            </h2>
            <p className="mt-3 text-[9px] leading-[1.35] text-[#111827] md:max-w-[390px] md:text-[12px] md:leading-[1.35] lg:max-w-[500px] lg:text-[16px] lg:leading-[1.25]">
              {content.description}
            </p>

            <div className="mt-6 flex items-center justify-center gap-3 md:justify-start lg:mt-7">
              {content.actions.map((action, index) => (
                <a
                  key={action.label}
                  href={action.href}
                  aria-label={action.ariaLabel}
                  className={`inline-flex min-h-8 items-center justify-center rounded-full border border-[#38DDF2] px-4 text-[8px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38DDF2] md:min-h-9 md:px-2 md:text-[10px] lg:min-h-[42px] lg:px-6 lg:text-[16px] ${
                    index === 0
                      ? "bg-[#42DCEB] text-[#03101B] hover:bg-[#29cada]"
                      : "bg-transparent text-[#16BBDA] hover:bg-white/55"
                  }`}
                >
                  {action.label}
                  {index === 0 ? (
                    <span aria-hidden="true" className="ml-2 text-[14px]">
                      &rarr;
                    </span>
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-2.5 md:mt-0 md:gap-3">
            {content.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[10px] bg-[#EAF7FF] px-4 py-2.5 shadow-[0_14px_28px_rgba(7,26,48,0.24)] ring-1 ring-[#BAEAFF] md:rounded-[14px] md:px-5 md:py-3 lg:rounded-[16px] lg:px-7 lg:py-4"
              >
                <h3 className="text-[13px] font-medium leading-tight md:text-[18px] lg:text-[24px]">
                  {card.title}
                </h3>
                <p className="mt-2 hidden max-w-[470px] text-[11px] leading-[1.35] text-[#111827] md:block lg:text-[16px] lg:leading-[1.35]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

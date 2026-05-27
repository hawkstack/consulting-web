import type { ProductCncfOnePartnerContent } from "@/app/types/product-reseller/product-cncf/product-cncf";

type ProductCncfOnePartnerSectionProps = {
  content: ProductCncfOnePartnerContent;
};

export default function ProductCncfOnePartnerSection({
  content,
}: ProductCncfOnePartnerSectionProps) {
  return (
    <section className="bg-[#080E1D] font-lexend text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:px-6 md:grid-cols-[minmax(300px,332px)_minmax(0,1fr)] md:items-center md:gap-12 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-10 lg:px-12 lg:py-16 xl:px-24">
        <div className="order-2 grid gap-3 md:order-1 md:gap-3 lg:gap-4">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[18px] border border-[#6F83AE]/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(140,165,215,0.22),0_18px_45px_rgba(0,0,0,0.22)] md:rounded-[22px] md:px-4 md:py-4 lg:rounded-[28px] lg:px-5 lg:py-5 ${
                card.title === "Observability Stack"
                  ? "bg-[#064465]/50"
                  : "bg-[#101A2E]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-[11px] font-semibold leading-tight text-white md:text-[15px] lg:text-[20px]">
                  {card.title}
                </h2>
                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-[500px] leading-none md:px-3 md:text-[11px] lg:text-[14px] ${card.tagClassName}`}
                >
                  {card.tag}
                </span>
              </div>
              <p className="mt-2 max-w-[440px] text-[9px] leading-[1.55] text-[#D8DEEA] md:text-[13px] md:leading-[1.45] lg:mt-1s lg:leading-[1.7] lg:text-[16px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="order-1 text-center md:order-2 md:pl-0 md:text-left lg:pl-8">
          <h2 className="text-[16px] font-semibold leading-[1.05] tracking-normal text-white md:hidden lg:block lg:text-[48px]">
            <span className="block">{content.eyebrow}</span>
            <span className="block">
              <span className="text-[#86E2FF]">Full Cloud Native</span>{" "}
              journey.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[280px] text-[8px] leading-[1.35] text-[#D8DEEA] md:mx-0 md:mt-0 md:max-w-[350px] md:text-[15px] md:leading-[1.2] lg:mt-5 lg:max-w-[560px] lg:text-[18px] lg:leading-[1.65]">
            {content.description}
          </p>

          <ul className="mx-auto mt-3 grid max-w-[300px] gap-1.5 text-left md:mx-0 md:mt-5 md:max-w-[380px] md:gap-3 lg:max-w-none">
            {content.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-[9px] leading-[1.35] text-[#D8DEEA] md:gap-3 md:text-[13px] md:leading-[1.35] lg:text-[18px] lg:leading-[1.55]"
              >
                <span className="inline-flex size-[7px] shrink-0 items-center justify-center rounded-full border border-[#86E2FF] text-[#86E2FF] md:size-[15px]">
                  <svg
                    aria-hidden="true"
                    className="size-[5px] md:size-[9px]"
                    fill="none"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.4 6.2 4.8 8.6 9.8 3.4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

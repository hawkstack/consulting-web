import Link from "next/link";
import type { ProductGcpSolutionsContent } from "../types/product-gcp";

type ProductGcpSolutionsSectionProps = {
  content: ProductGcpSolutionsContent;
};

export default function ProductGcpSolutionsSection({
  content,
}: ProductGcpSolutionsSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1260px] px-5 py-14 md:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[28px] font-extrabold leading-tight tracking-[0] text-[#0a1020] sm:text-[32px] xl:text-[40px]">
            {content.title}
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-[#7b8496] sm:text-sm xl:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="flex min-h-[250px] flex-col items-center rounded-[10px] border border-[#d9e0ea] bg-white px-6 py-7 text-center shadow-[0_8px_28px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#b8c8df] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] md:items-start md:text-left xl:min-h-[310px] xl:px-7 xl:py-8"
              >
                <span className="mx-auto flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[5px] bg-[#eef4ff] text-[#1f6fff] md:mx-0 xl:h-8 xl:w-8 xl:rounded-[7px]">
                  <Icon className="h-[18px] w-[18px] xl:h-4 xl:w-4" />
                </span>

                <h3 className="mt-5 text-[18px] font-bold leading-snug text-[#0c1222] xl:mt-6 xl:text-[18px]">
                  {card.title}
                </h3>

                <p className="mt-4 flex-1 text-[12px] leading-[1.65] text-[#566172] xl:mt-5 xl:text-[15px] xl:leading-[1.6]">
                  {card.description}
                </p>

                <Link
                  href={card.action.href}
                  aria-label={card.action.ariaLabel}
                  className="mt-4 inline-flex items-center justify-center gap-1 text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#1f6fff] transition hover:text-[#174fc4] md:justify-start xl:mt-7 xl:text-[13px]"
                >
                  {card.action.label}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

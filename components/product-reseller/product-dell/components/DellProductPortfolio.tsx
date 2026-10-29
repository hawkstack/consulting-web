import Image from "next/image";
import { dellProductPortfolioData } from "../data/dellData";

export default function DellProductPortfolio() {
  const data = dellProductPortfolioData;

  return (
    <section className="border-t-[3px] border-[#eaf4fb] bg-white px-5 pb-8 pt-7 sm:px-8 md:px-12 lg:px-16 lg:pb-9 lg:pt-8 xl:px-[6.8vw]">
      <div className="mx-auto max-w-[1214px]">
        <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center lg:mb-9">
          <div>
            <p className="mb-2 text-[11px] font-bold tracking-[0.04em] text-[#0076ce]">
              {data.eyebrow}
            </p>
            <h2 className="font-lexend text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#102b41] sm:text-[28px]">
              {data.heading}
            </h2>
          </div>
          <p className="text-[13px] leading-[1.5] text-[#587185] md:shrink-0 md:text-right">
            {data.headerDescription.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
        </header>

        <div className="grid gap-[18px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <article className="flex min-h-[322px] flex-col rounded-[12px] bg-[#102d46] p-[23px] text-white">
            <p className="text-[11px] font-bold tracking-[0.025em] text-[#70cfff]">
              {data.featured.category}
            </p>
            <h3 className="mt-3 whitespace-pre-line font-lexend text-[24px] font-semibold leading-[1.28]">
              {data.featured.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.5]">
              {data.featured.description}
            </p>
            <div className="relative mt-auto flex h-[108px] w-full items-center justify-center">
              <Image
                src={data.featured.imagePath}
                alt={data.featured.imageAlt}
                width={356}
                height={108}
                priority
                className="h-auto max-h-[108px] w-full max-w-[356px] object-contain"
              />
            </div>
            <a
              className="mt-3 w-fit text-[12px] font-semibold text-[#70cfff] hover:underline"
              href={data.featured.href}
            >
              {data.featured.linkLabel}
            </a>
          </article>

          <div className="grid gap-[18px] sm:grid-cols-2">
            {data.products.map((product) => (
              <article
                key={product.id}
                className="flex min-h-[152px] flex-col rounded-[12px] bg-[#f5f9fc] p-[19px]"
              >
                <p className="text-[11px] font-bold tracking-[0.025em] text-[#0076ce]">
                  {product.category}
                </p>
                <h3 className="mt-1.5 font-lexend text-[17px] font-semibold leading-6 text-[#102b41]">
                  {product.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.45] text-[#587185]">
                  {product.description}
                </p>
                <a
                  className="mt-auto pt-3 w-fit text-[12px] font-semibold text-[#0076ce] hover:underline"
                  href={product.href}
                >
                  {product.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </div>

        <article className="mt-[18px] grid min-h-[61px] items-center gap-2 rounded-[10px] bg-[#eaf4fb] px-5 py-4 sm:px-[23px] lg:grid-cols-[1fr_1.85fr_1.9fr_0.65fr] lg:gap-4 lg:py-3">
          <p className="text-[11px] font-bold tracking-[0.025em] text-[#0076ce]">
            {data.apex.category}
          </p>
          <h3 className="font-lexend text-[18px] font-semibold leading-6 text-[#102b41]">
            {data.apex.heading}
          </h3>
          <p className="text-[13px] leading-5 text-[#587185]">
            {data.apex.description}
          </p>
          <a
            className="w-fit text-[12px] font-semibold text-[#0076ce] hover:underline"
            href={data.apex.href}
          >
            {data.apex.linkLabel}
          </a>
        </article>
      </div>
    </section>
  );
}

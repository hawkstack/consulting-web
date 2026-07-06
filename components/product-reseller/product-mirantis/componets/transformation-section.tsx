import type { ProductMirantisTransformationContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisTransformationSectionProps = {
  content: ProductMirantisTransformationContent;
};

export default function ProductMirantisTransformationSection({
  content,
}: ProductMirantisTransformationSectionProps) {
  return (
    <section className="bg-[#101827] px-5 py-12 font-lexend text-white md:px-8 md:py-14 lg:px-20 xl:px-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(220px,320px)_minmax(0,1fr)] md:gap-12 lg:grid-cols-[minmax(320px,480px)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        <div className="text-center md:text-left">
          <h2 className="mx-auto max-w-[290px] text-[20px] font-extrabold leading-[1.32] tracking-normal md:mx-0 md:max-w-[320px] md:text-[24px] md:leading-[1.22] lg:max-w-[420px] lg:text-[36px] lg:leading-[1.15] xl:text-[42px]">
            {content.title}
          </h2>

          <p className="mt-4 hidden max-w-[430px] text-[12px] font-medium leading-[1.55] text-white md:block lg:text-[15px] xl:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[630px] gap-3 md:mx-0 md:gap-4 lg:gap-5">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[46px] items-center gap-3 rounded-md bg-white px-4 py-3 text-[#0B1020] shadow-[0_10px_24px_rgba(0,0,0,0.16)] md:min-h-[54px] md:gap-4 md:px-5 lg:min-h-[72px] lg:rounded-lg lg:px-6 xl:min-h-[74px]"
            >
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#08204A] text-white md:size-5">
                <svg
                  aria-hidden="true"
                  className="size-2.5 md:size-3"
                  fill="none"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.3 6.1 4.8 8.5 9.7 3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </span>

              <p className="text-[10px] font-medium leading-[1.4] tracking-normal md:text-[11px] lg:text-[14px] xl:text-[15px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

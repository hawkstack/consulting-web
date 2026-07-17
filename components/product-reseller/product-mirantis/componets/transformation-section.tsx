import { MirantisTransformationCheckIcon } from "@/components/product-reseller/product-mirantis/icons";
import type { ProductMirantisTransformationContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisTransformationSectionProps = {
  content: ProductMirantisTransformationContent;
};

export default function ProductMirantisTransformationSection({
  content,
}: ProductMirantisTransformationSectionProps) {
  return (
    <section className="bg-[#101827] px-5 py-12 font-lexend text-white md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-24 xl:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(220px,300px)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(360px,480px)_minmax(0,1fr)] xl:gap-24">
        <div className="text-center md:text-left">
          <h2 className="mx-auto max-w-[290px] text-[20px] font-extrabold leading-[1.32] tracking-normal md:mx-0 md:max-w-[300px] md:text-[24px] md:leading-[1.22] lg:max-w-[360px] lg:text-[30px] lg:leading-[1.16] xl:max-w-[420px] xl:text-[42px] xl:leading-[1.15]">
            {content.title}
          </h2>

          <p className="mt-4 hidden max-w-[300px] text-[12px] font-medium leading-[1.5] text-white md:block lg:max-w-[360px] lg:text-[13px] lg:leading-[1.55] xl:max-w-[430px] xl:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[630px] gap-3 md:mx-0 md:max-w-none md:gap-4 xl:gap-5">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[46px] items-center gap-3 rounded-xl bg-white px-4 py-3 text-[#0B1020] shadow-[0_10px_24px_rgba(0,0,0,0.16)] md:min-h-[54px] md:gap-4 md:px-5 lg:min-h-[62px] xl:min-h-[74px] xl:px-6"
            >
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#08204A] text-white md:size-5">
                <MirantisTransformationCheckIcon className="size-2.5 md:size-3" />
              </span>

              <p className="text-[10px] font-medium leading-[1.4] tracking-normal md:text-[11px] lg:text-[12px] xl:text-[15px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

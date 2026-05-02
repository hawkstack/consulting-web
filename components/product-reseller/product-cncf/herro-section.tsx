import Image from "next/image";
import type { ProductCncfHeroContent } from "@/app/types/product-reseller/product-cncf/product-cncf";

type ProductCncfHeroProps = {
  content: ProductCncfHeroContent;
};

export default function ProductCncfHeroSection({
  content,
}: ProductCncfHeroProps) {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto grid max-w-[1300px] items-center gap-4 px-5 py-8 md:min-h-[300px] md:grid-cols-[minmax(0,1fr)_minmax(260px,330px)] md:gap-6 md:px-10 lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(420px,400px)] lg:gap-8 lg:px-[76px] lg:py-12">
        <div className="mx-auto max-w-[640px] text-center md:mx-0 md:text-left">
          <h1 className="text-[22px] font-semibold leading-[1.18] tracking-normal text-[#030711] sm:text-[28px] md:text-[28px] md:leading-[1.08] lg:text-[44px] xl:text-[48px]">
            {content.titleLines.map((line, index) => (
              <span key={line} className="inline md:block">
                {line}
                {index < content.titleLines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <p className="mt-3 hidden max-w-[620px] text-[11px] leading-[1.55] text-[#242936] md:block lg:mt-4 lg:text-[14px] lg:leading-[1.75] xl:text-[15px]">
            {content.description}
          </p>

          <button
            type="button"
            aria-label={content.button.ariaLabel}
            className="mt-4 hidden min-h-9 items-center gap-2 rounded-full bg-[#4FDCF0] px-4 text-[10px] font-semibold text-[#021827] transition hover:bg-[#35c9de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4FDCF0] md:inline-flex lg:mt-5 lg:min-h-12 lg:px-5 lg:text-[13px]"
          >
            {content.button.label}
            <span aria-hidden="true" className="text-[15px] leading-none">
              &rarr;
            </span>
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] md:mx-0 md:max-w-[330px] md:justify-self-end lg:max-w-[500px]">
          <div className="absolute inset-x-10 bottom-2 h-10 rounded-full bg-[#0B68FF]/15 blur-2xl" />
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={520}
            height={340}
            priority
            className="relative h-auto w-full object-contain"
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 330px, 82vw"
          />
        </div>

        <div className="mx-auto flex max-w-[360px] flex-col items-center text-center md:hidden">
          <p className="text-[11px] leading-[1.45] text-[#242936]">
            {content.description}
          </p>

          <button
            type="button"
            aria-label={content.button.ariaLabel}
            className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#4FDCF0] px-5 text-[12px] font-semibold text-[#021827] transition hover:bg-[#35c9de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4FDCF0]"
          >
            {content.button.label}
            <span aria-hidden="true" className="text-[15px] leading-none">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

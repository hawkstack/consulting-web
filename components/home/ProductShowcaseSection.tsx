import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ProductReadinessCheck } from "@/components/icons/Home/ProductShowcaseIcons";
import { OverviewArrow } from "@/components/icons/Home/AboutIcons";
import { getLocalizedProductShowcaseData } from "@/lib/home/getLocalizedProductShowcaseData";
import type { ProductShowcaseCopy } from "@/types/home/productShowcase";

export default function ProductShowcaseSection() {
  const t = useTranslations("ProductShowcase");
  const locale = useLocale();
  const textDirection = locale === "ar" ? "rtl" : "ltr";
  const copy = (t.has("content") ? t.raw("content") : {}) as Partial<ProductShowcaseCopy>;
  const { product } = getLocalizedProductShowcaseData(copy);
  return (
    <section id="hawkstack-products" lang={locale} dir="ltr" aria-labelledby="product-showcase-title" className="scroll-mt-[70px] bg-white px-5 pb-6 font-lexend text-[#132440] md:px-10 xl:px-[68px]">
      <article className="home-product-showcase-card mx-auto grid w-full max-w-[1214px] overflow-hidden rounded-[17px] border border-[#ccdfff] bg-[#f7faff] shadow-[0_6px_20px_#17375307] md:grid-cols-[minmax(0,62%)_minmax(0,38%)]">
        <div className="min-w-0 p-5 lg:px-[22px] lg:py-[18px]">
          <p dir={textDirection} className="text-left text-[8px] font-semibold uppercase tracking-[0.03em] leading-relaxed text-[#2675ff]">{product.category}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
            <h2 id="product-showcase-title" className="text-[clamp(25px,2.35vw,32px)] font-semibold leading-tight tracking-[-0.4px]">{product.name}</h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ffcc70] bg-[#fff6d9] px-2.5 py-1 text-[8px] font-medium text-[#945200]"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#ef8b00]" /><span dir={textDirection}>{product.status}</span></span>
          </div>
          <p dir={textDirection} className="mt-3 text-left text-[13px] font-semibold leading-[1.5]">{product.summary}</p>
          <p dir={textDirection} className="mt-2 text-left text-[11px] leading-[1.65] text-[#48658a]">{product.description}</p>
          <div className="mt-5 flex flex-col gap-4 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {product.features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-2 text-[10px] leading-[1.5]">
                  {index > 0 && <OverviewArrow className="mr-1 size-3.5 text-[#2675ff]" />}
                  <ProductReadinessCheck className="size-4 shrink-0 text-[#2675ff]" /><span dir={textDirection}>{feature}</span>
                </li>
              ))}
            </ol>
            <Link href={product.href} target="_blank" rel="noopener noreferrer" className="home-product-showcase-action inline-flex min-h-[42px] shrink-0 items-center justify-center gap-3 self-start rounded-[9px] bg-[#536bff] px-5 py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-[#4056e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#536bff] min-[1200px]:self-auto"><span dir={textDirection}>{product.ctaLabel}</span><OverviewArrow className="size-4" /></Link>
          </div>
        </div>
        <div className="relative min-h-[230px] md:min-h-full">
          <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 767px) 100vw, 38vw" className="object-cover object-[center_35%]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-linear-to-r from-[#f7faff] to-transparent md:block" />
        </div>
      </article>
    </section>
  );
}

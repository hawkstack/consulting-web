import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ProductReadinessCheck } from "@/components/icons/Home/ProductShowcaseIcons";
import { getLocalizedProductShowcaseData } from "@/lib/home/getLocalizedProductShowcaseData";
import type { ProductShowcaseCopy } from "@/types/home/productShowcase";

export default function ProductShowcaseSection() {
  const t = useTranslations("ProductShowcase");
  const textDirection = useLocale() === "ar" ? "rtl" : "ltr";
  const copy = (t.has("content") ? t.raw("content") : {}) as Partial<ProductShowcaseCopy>;
  const { product } = getLocalizedProductShowcaseData(copy);
  return (
    <section id="hawkstack-products" dir="ltr" aria-labelledby="product-showcase-title" className="scroll-mt-[70px] bg-white px-5 pb-8 lg:pb-0 font-lexend text-[#0a1731] md:px-10 xl:px-[68px]">
      <article className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[20px] border border-[#d4e1f0] bg-white shadow-[0_5px_20px_#1737530a] md:grid-cols-[minmax(0,68%)_minmax(0,32%)]">
        <div className="min-w-0 p-5 lg:p-4">
          <p dir={textDirection} className="text-[10px] font-semibold text-[#075bef]">{product.category}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 id="product-showcase-title" className="text-[clamp(24px,2.1vw,28px)] font-semibold leading-tight">{product.name}</h2>
            <span dir={textDirection} className="inline-flex items-center gap-1.5 rounded-full border border-[#ffc261] bg-[#fff7dd] px-2.5 py-1 text-[9px] font-medium text-[#945200]"><span aria-hidden="true" className="size-1.5 rounded-full bg-[#ef8b00]" />{product.status}</span>
          </div>
          <p dir={textDirection} className="mt-3 lg:mt-2 text-sm lg:text-xs font-semibold text-[#244d80]">{product.summary}</p>
          <p dir={textDirection} className="mt-4 lg:mt-2.5 text-xs lg:text-[11px] leading-[1.65] text-[#405b82]">{product.description}</p>
          <ul className="mt-4 lg:mt-2.5 grid gap-x-6 gap-y-2 lg:gap-y-1.5 sm:grid-cols-2">
            {product.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-[11px] leading-[1.5] text-[#405b82]"><ProductReadinessCheck className="mt-px size-3.5 shrink-0 text-[#075bef]" /><span dir={textDirection}>{feature}</span></li>)}
          </ul>
          <Link href={product.href} target="_blank" rel="noopener noreferrer" className="mt-4 lg:mt-3 inline-flex rounded-[10px] bg-[#075bef] px-6 py-3 lg:py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#064bc7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075bef]"><span dir={textDirection}>{product.ctaLabel}</span></Link>
        </div>
        <div className="relative min-h-[240px] md:min-h-full">
          <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 767px) 100vw, 32vw" className="object-cover" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-white to-transparent md:block" />
          <div className="absolute bottom-[9%] left-1/2 w-[65%] max-w-[210px] -translate-x-1/2 rounded bg-white p-1.5 shadow-lg"><Image src={product.logo} alt={product.name + " — Powered by HawkStack"} width={234} height={62} className="h-auto w-full object-contain" /></div>
        </div>
      </article>
    </section>
  );
}

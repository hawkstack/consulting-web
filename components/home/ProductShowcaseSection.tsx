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
  const data = getLocalizedProductShowcaseData(copy);
  const { product } = data;

  return (
    <section id="hawkstack-products" dir="ltr" aria-labelledby="product-showcase-title" className="scroll-mt-[70px] bg-[#f5f8fc] px-5 py-8 font-lexend text-[#0a1731] md:flex md:min-h-[calc(50svh-70px)] xl:min-h-[calc(100svh-70px)] md:items-center md:py-7 md:px-10 xl:px-[68px]">
      <div className="mx-auto w-full max-w-[1240px] xl:py-10">
        <div className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
          <div>
            <p dir={textDirection} className="mb-3 text-left text-[10px] font-semibold uppercase tracking-[0.03em] text-[#0066ff]">{data.eyebrow}</p>
            <h2 id="product-showcase-title" dir={textDirection} className="text-left text-[clamp(26px,2.5vw,34px)] font-semibold leading-[1.15] tracking-[-0.5px]">
              {data.title[0]}<br />{data.title[1]}
            </h2>
          </div>
          <p dir={textDirection} className="max-w-[480px] text-left text-xs leading-[1.6] text-[#405b82] md:justify-self-end md:text-left xl:text-sm">{data.description}</p>
        </div>

        <article className="mt-6 grid min-w-0 overflow-hidden rounded-[16px] border border-[#d4e1f0] bg-[#e9f1f9] shadow-[0_4px_12px_#1737530a] md:min-h-[clamp(280px,50svh,340px)] md:grid-cols-[minmax(0,37.5%)_minmax(0,1fr)]">
          <div className="relative aspect-[482/365] min-w-0 md:aspect-auto md:min-h-[260px]">
            <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 767px) 92vw, 38vw" className="object-cover" />
            <div className="absolute bottom-[7%] left-1/2 w-[46%] max-w-[220px] -translate-x-1/2 rounded bg-white p-1.5 shadow-[0_3px_15px_#0002]">
              <Image src={product.logo} alt={product.name + " — Powered by HawkStack"} width={234} height={62} sizes="(max-width: 767px) 42vw, 18vw" className="h-auto w-full object-contain" />
            </div>
          </div>

          <div className="min-w-0 p-5 md:flex md:flex-col md:justify-center lg:px-7 lg:py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p dir={textDirection} className="text-left text-[clamp(9px,0.8vw,11px)] font-semibold leading-[1.4] text-[#0066ff]">{product.category}</p>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#ffc261] bg-[#fff7dd] px-2.5 py-1 text-[8px] font-semibold text-[#945200]">
                <span aria-hidden="true" className="size-[6px] rounded-full bg-[#ef8b00]" /><span dir={textDirection}>{product.status}</span>
              </span>
            </div>
            <h3 className="mt-2 text-[clamp(22px,2vw,28px)] font-semibold leading-[1.2]">{product.name}</h3>
            <p dir={textDirection} className="mt-1 text-left text-[clamp(12px,1.1vw,15px)] font-semibold leading-[1.4] text-[#486184]">{product.summary}</p>
            <p dir={textDirection} className="mt-2 text-left text-[clamp(11px,1vw,13px)] leading-[1.55] text-[#405b82]">{product.description}</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex min-w-0 items-start gap-2 text-[clamp(10px,0.9vw,12px)] leading-[1.45] text-[#405b82]">
                  <ProductReadinessCheck className="mt-px size-[14px] shrink-0 text-[#0066ff]" />
                  <span dir={textDirection} className="min-w-0 text-left">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href={product.href} className="mt-4 inline-flex self-start items-center justify-center rounded-full bg-[linear-gradient(100deg,#10a683,#0757ed)] px-7 py-3 text-xs font-medium text-white shadow-[0_4px_12px_#146ac32b] transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]">
              <span dir={textDirection}>{product.ctaLabel}</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

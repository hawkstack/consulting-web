import Link from "next/link";
import { ProductGcpCtaContent } from "../types/product-gcp";

type ProductGcpCtaSectionProps = {
  content: ProductGcpCtaContent;
};

export default function ProductGcpCtaSection({
  content,
}: ProductGcpCtaSectionProps) {
  return (
    <section className="bg-slate-900 px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="text-3xl font-semibold">{content.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
          {content.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={content.action.href}
            aria-label={content.action.ariaLabel}
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            {content.action.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

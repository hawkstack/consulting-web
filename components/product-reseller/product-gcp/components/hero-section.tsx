import { ProductGcpHeroContent } from "../types/product-gcp";

type ProductGcpHeroSectionProps = {
  content: ProductGcpHeroContent;
};

export default function ProductGcpHeroSection({
  content,
}: ProductGcpHeroSectionProps) {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}

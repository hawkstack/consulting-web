import Link from "next/link";
import type { SusePageData } from "@/lib/product-reseller/getLocalizedSusePageData";

export default function SUSEContactCTA({ data: content }: { data: SusePageData["contact"] }) {
  return (
    <section
      aria-labelledby="suse-contact-heading"
      className="bg-[#14312d] text-[#edf5f1]"
    >
      <div className="mx-auto grid w-full max-w-[1170px] items-center gap-8 px-6 py-12 sm:px-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-10 lg:py-[60px] xl:px-0">
        <div>
          <span
            aria-hidden="true"
            className="mb-7 block h-1 w-[38px] bg-[#4bcd87]"
          />
          <h2
            id="suse-contact-heading"
            className="max-w-[590px] text-[clamp(28px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.02em]"
          >
            {content.heading}
          </h2>
          <p className="mt-8 max-w-[740px] text-[15px] leading-[1.75] text-[#b7ccc2]">
            {content.description}
          </p>
        </div>
        <Link
          href={content.action.href}
          className="inline-flex min-h-[51px] items-center justify-center rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-[#162b28] transition-colors hover:bg-[#dff5e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4bcd87] justify-self-start lg:justify-self-end"
        >
          {content.action.label}
        </Link>
      </div>
    </section>
  );
}

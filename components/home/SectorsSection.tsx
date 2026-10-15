import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  sectorsSectionData,
  type SectorsSectionCopy,
} from "@/data/home/sectors";
import { SolutionDiscussionArrow } from "@/components/icons/Home/SolutionIcons";

export default function SectorsSection() {
  const t = useTranslations("SectorsSection");
  const copy = t.raw("content") as SectorsSectionCopy;
  const textDirection = useLocale() === "ar" ? "rtl" : "ltr";

  return (
    <section
      id="who-we-serve"
      dir="ltr"
      aria-labelledby="sectors-title"
      className="scroll-mt-[70px] bg-[#031527] px-5 font-lexend text-white md:flex md:items-center md:px-10 xl:px-[68px] py-12">
      <div className="mx-auto w-full max-w-[1240px]">
        <p
          dir={textDirection}
          className="mb-3 text-left text-[10px] font-medium uppercase tracking-[0.22em] text-[#00d4f3]">
          {copy.eyebrow}
        </p>
        <h2
          id="sectors-title"
          dir={textDirection}
          className="text-left text-[clamp(25px,2.6vw,36px)] font-semibold leading-[1.2]">
          {copy.title}
        </h2>
        <p
          dir={textDirection}
          className="mt-3 text-left text-[clamp(12px,1.2vw,16px)] leading-relaxed text-[#b8c8de]">
          {copy.description}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
          {sectorsSectionData.sectors.map((sector, index) => {
            const sectorCopy = copy.sectors[index];
            return (
              <article
                key={sector.id}
                className="min-w-0 overflow-hidden rounded-[7px] border border-[#224466] bg-[#061b3e] transition-[transform,box-shadow,border-color] origin-center duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:hover:scale-[1.015] [@media(hover:hover)]:hover:border-[#3484b8] [@media(hover:hover)]:hover:shadow-[0_0_24px_3px_rgba(0,174,239,0.14)] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative aspect-[410/249] md:aspect-auto md:h-[clamp(150px,27svh,225px)]">
                  <Image
                    src={sector.image}
                    alt={sectorCopy.imageAlt}
                    fill
                    sizes="(max-width: 767px) 92vw, 31vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-5">
                  <h3
                    dir={textDirection}
                    className="text-left text-base font-semibold leading-snug">
                    {sectorCopy.title}
                  </h3>
                  <p
                    dir={textDirection}
                    className="mt-3 text-left text-xs leading-relaxed text-[#b8c8de]">
                    {sectorCopy.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-[#244057] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p
            dir={textDirection}
            className="text-left text-xs font-medium leading-relaxed">
            {copy.footer}
          </p>
          <Link
            href={sectorsSectionData.href}
            className="inline-flex items-center gap-2 self-start text-sm font-light text-[#dae5ef] transition-colors hover:text-[#00d4f3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00d4f3] sm:self-auto">
            <span dir={textDirection}>{copy.ctaLabel}</span>
            <SolutionDiscussionArrow className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

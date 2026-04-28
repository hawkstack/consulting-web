import Link from "next/link";

import type { KubevirtCommercialCtaContent } from "@/app/types/kubevirt-service";

type CommercialCtaSectionProps = {
  content: KubevirtCommercialCtaContent;
};

export default function CommercialCtaSection({
  content,
}: CommercialCtaSectionProps) {
  return (
    <div className="mt-8 pb-10 md:mt-10 md:pb-0 xl:mt-12">
      <div className="rounded-[28px] border border-[#21435A] bg-[linear-gradient(90deg,_#07243A_0%,_#0C2342_38%,_#132B55_72%,_#203663_100%)] px-6 py-7 shadow-[0_20px_45px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] md:flex md:items-center md:justify-between md:gap-8 md:px-7 md:py-8 xl:gap-10 xl:rounded-[32px] xl:px-[48px] xl:py-[20px]">
        <div className="md:max-w-[410px] xl:max-w-[620px] lg:max-w-[620px]">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-[#64EAFF] md:text-left xl:text-[12px]">
            {content.badge}
          </p>
          <h3 className="mt-3 text-center text-[18px] font-semibold leading-[1.12] tracking-[-0.04em] text-white md:mt-4 md:max-w-[360px] md:text-left md:text-[28px] md:leading-[1.1] xl:mt-4 xl:max-w-[560px] xl:text-[48px] lg:max-w-[560px] lg:text-[42px]">
            {content.title}
          </h3>
          <p className="mx-auto mt-3 max-w-[330px] text-center text-[13px] leading-[1.7] tracking-[-0.01em] text-[#D2D8E5] md:mx-0 md:mt-3 md:max-w-[420px] md:text-left md:text-[15px] md:leading-[1.75] xl:max-w-[610px] xl:text-[16px] lg:max-w-[610px] lg:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:mt-0 md:w-[230px] md:flex-shrink-0 xl:w-[300px] lg:w-[300px]">
          <Link
            href={content.primaryHref}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-center text-[15px] font-semibold tracking-[-0.02em] text-[#0F172A] transition-transform hover:scale-[1.01]"
          >
            {content.primaryLabel}
          </Link>
          <Link
            href={content.secondaryHref}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 bg-transparent px-6 text-center text-[15px] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-white/5"
          >
            {content.secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

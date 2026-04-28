import Link from "next/link";

import type { KubevirtProcessCtaContent } from "@/app/types/kubevirt-service";

type GetStartedProps = {
  content: KubevirtProcessCtaContent;
};

export default function GetStarted({
  content,
}: GetStartedProps) {
  return (
    <div className="mt-8 md:mt-10 xl:mt-12">
      <div className="rounded-[28px] border border-[#21314A] bg-[#131B2D] px-6 py-7 shadow-[0_20px_45px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.03)] md:px-8 md:py-8 xl:px-6 xl:py-[30px]">
        <div className="flex flex-col items-center gap-6 text-center md:gap-8 xl:flex-row xl:items-center xl:gap-6 xl:text-left">
          <div className="max-w-[300px] md:max-w-[620px] lg:max-w-[720px] xl:max-w-[600px] xl:min-w-[520px] xl:flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#59E6FF] md:text-[12px]">
              {content.badge}
            </p>

            <h3 className="mt-3 text-[22px] font-semibold leading-[1.12] tracking-[-0.05em] text-white md:text-[50px] xl:max-w-[520px] xl:text-[48px]">
              {content.title}
            </h3>

            <p className="mt-3 hidden text-[15px] leading-[1.75] tracking-[-0.01em] text-[#D2D8E5] md:block md:text-[18px] lg:max-w-[820px] xl:max-w-[620px] xl:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="flex w-full max-w-[250px] flex-col items-center gap-3 md:mx-auto md:max-w-[860px] md:flex-row md:justify-center md:gap-4 xl:ml-auto xl:mr-0 xl:max-w-[550px] xl:w-auto xl:flex-shrink-0 xl:justify-end">
            <Link
              href={content.primaryHref}
              className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-white px-5 text-center text-[14px] font-semibold tracking-[-0.02em] text-[#111827] transition-transform hover:scale-[1.01] md:min-h-[60px] md:text-[17px] xl:min-h-[48px] xl:w-[330px] xl:px-5 xl:text-[14px]"
            >
              {content.primaryLabel}
            </Link>
            <Link
              href={content.secondaryHref}
              className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#22D3EEB2] bg-[#22D3EEB2] px-5 text-center text-[14px] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-[#1ea7cf] md:min-h-[60px] md:text-[17px] xl:min-h-[48px] xl:w-[360px] xl:px-5 xl:text-[14px]"
            >
              {content.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

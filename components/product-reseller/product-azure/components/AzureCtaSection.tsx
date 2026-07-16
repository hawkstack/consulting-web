import Link from "next/link";

import type { AzureCtaData } from "../types/azure";

type AzureCtaSectionProps = {
  data: AzureCtaData;
};

export default function AzureCtaSection({ data }: AzureCtaSectionProps) {
  return (
    <section className="bg-white px-3 pb-9 pt-8 text-center text-[#05080F] min-[480px]:px-11 min-[480px]:pb-12 min-[480px]:pt-[54px] lg:px-[42px] lg:pb-[52px] lg:pt-[62px]">
      <div className="mx-auto w-full max-w-[775px] md:max-w-[775px] rounded-[20px] border border-[#C8DBFB] bg-[linear-gradient(145deg,#EEF5FF_0%,#F8FBFF_58%,#EAF2FF_100%)] px-7 py-[29px] shadow-[0_18px_38px_rgba(10,72,165,0.07)] min-[480px]:max-w-[432px] min-[480px]:rounded-[16px] min-[480px]:px-11 min-[480px]:py-[42px] lg:max-w-[1075px] lg:px-12 lg:pb-[43px] lg:pt-[46px]">
        <h2 className="mx-auto hidden max-w-[860px] text-[32px] font-extrabold leading-[1.16] tracking-normal min-[480px]:block lg:text-[32px] xl:text-[48px]">
          {data.title}
        </h2>

        <h2 className="mx-auto max-w-[484px] text-[18px] font-extrabold leading-[1.3] tracking-normal min-[480px]:hidden">
          <span className="block">{data.mobileTitleStart}</span>
          <span className="block text-[#0759D8]">{data.mobileTitleHighlight}</span>
        </h2>

        <p className="mx-auto mt-[18px] hidden max-w-[395px] text-[13px] font-medium leading-[1.45] text-[#4B5566] min-[480px]:block lg:max-w-[590px] xl:text-[18px]">
          {data.description}
        </p>

        <p className="mx-auto mt-[8px] max-w-[192px] text-[12px] font-medium leading-[1.43] text-[#161B24] min-[480px]:hidden">
          {data.mobileDescription}
        </p>

        <div className="mt-7 hidden items-center justify-center gap-4 min-[480px]:flex lg:gap-[16px]">
          <Link
            href={data.primaryAction.href}
            className="inline-flex h-10 min-w-[222px] items-center justify-center rounded-[7px] bg-[#0759D8] px-6 text-[10px] font-extrabold tracking-[0.04em] text-white shadow-[0_9px_14px_rgba(7,89,216,0.23)] transition hover:bg-[#064fc0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0759D8] min-[480px]:min-w-[170px] min-[480px]:px-4 min-[480px]:leading-[1.15] lg:min-w-[222px] xl:text-[14px]"
          >
            {data.primaryAction.label}
          </Link>

          <Link
            href={data.secondaryAction.href}
            className="inline-flex h-10 min-w-[208px] items-center justify-center rounded-[7px] border border-[#AAC9FB] bg-transparent px-6 text-[10px] font-extrabold tracking-[0.08em] text-[#0759D8] transition hover:bg-white/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0759D8] min-[480px]:min-w-[158px] min-[480px]:px-4 min-[480px]:leading-[1.15] lg:min-w-[208px] xl:text-[14px]"
          >
            {data.secondaryAction.label}
          </Link>
        </div>

        <Link
          href={data.mobileAction.href}
          className="mx-auto mt-[22px] inline-flex h-[38px] min-w-[174px] items-center justify-center rounded-[6px] bg-[#0759D8] px-4 text-[11px] font-medium text-white shadow-[0_8px_13px_rgba(7,89,216,0.24)] transition hover:bg-[#064fc0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0759D8] min-[480px]:hidden"
        >
          {data.mobileAction.label}
        </Link>
      </div>
    </section>
  );
}

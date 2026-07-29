import Link from "next/link";
import type { CTAData } from "@/components/home/blogs/types/blogs";

type CTASectionProps = {
  data: CTAData;
};

const CTASection = ({ data }: CTASectionProps) => {
  return (
    <section className="bg-[#F7F9FB] px-5 py-7 font-lexend sm:px-8 sm:py-10 lg:py-12">
      <div className="mx-auto flex min-h-[239px] max-w-[1160px] flex-col items-center justify-center rounded-[28px] bg-[linear-gradient(115deg,#123D9B_0%,#062344_100%)] px-5 py-10 text-center sm:min-h-[270px]">
        <h2 className="max-w-[800px] text-[24px] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-[31px] xl:text-[48px]">
          {data.title}
        </h2>
        <p className="mt-4 mx-auto md:max-w-[410px] lg:max-w-[490px] xl:max-w-[630px] text-[10px] leading-[1.55] text-[#C8D4FF] sm:text-[12px] xl:text-[18px]">
          {data.description}
        </p>
        <Link
          href={data.buttonHref}
          className="mt-7 rounded-2xl bg-white px-7 py-3 xl:py-4 text-[8px] font-medium text-[#003CA3] shadow-[0_8px_16px_rgba(0,0,0,0.14)] transition-colors hover:bg-[#F2F6FF] sm:px-9 sm:text-[9px] xl:text-[14px]"
        >
          {data.buttonLabel}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

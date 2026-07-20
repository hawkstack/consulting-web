import Link from "next/link";
import Image from "next/image";
import type { PartnerCTASectionData } from "@/components/home/partner/types/partner";

type CTASectionProps = {
  data: PartnerCTASectionData;
};

const CTASection = ({ data }: CTASectionProps) => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1170px] overflow-hidden rounded-[24px] bg-[#003CA3] shadow-[0_16px_30px_rgba(19,62,146,0.14)] sm:rounded-[28px] lg:rounded-[22px]">
        <div className="relative min-h-[330px] overflow-hidden px-7 py-10 sm:px-12 sm:py-14 lg:min-h-[405px] lg:px-[86px] lg:py-[95px]">
          <div className="relative z-10 max-w-[610px]">
            <h2 className="font-lexend text-[30px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#FFFFFF] sm:text-[38px] lg:text-[42px]">
              {data.title}
            </h2>

            <p className="mt-6 max-w-[610px] font-lexend text-[15px] leading-[1.55] text-[#C8D4FF] sm:text-[16px] lg:mt-7 lg:text-[16px]">
              {data.description}
            </p>

            <Link
              href={data.buttonHref}
              className="mt-7 inline-flex min-h-[45px] items-center justify-center rounded-full bg-white px-9 font-lexend text-[13px] font-medium text-[#003CA3] transition-colors hover:bg-[#e8efff] lg:mt-8"
            >
              {data.buttonLabel}
            </Link>
          </div>

          <Image
            src={data.image}
            alt={data.imageAlt}
            width={480}
            height={330}
            className="pointer-events-none absolute right-[-64px] top-1/2 hidden h-[250px] w-[480px] -translate-y-1/2 object-contain opacity-80 lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

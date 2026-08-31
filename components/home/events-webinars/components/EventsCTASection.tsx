import Link from "next/link";
import type { EventsCTAData } from "@/components/home/events-webinars/types/events-webinars";

type EventsCTASectionProps = {
  data: EventsCTAData;
};

const EventsCTASection = ({ data }: EventsCTASectionProps) => {
  return (
    <section className="bg-[#003CA3] font-lexend text-center">
      <div className="mx-auto flex min-h-[254px] max-w-[1170px] flex-col items-center px-6 pb-12 pt-[47px] sm:px-10 lg:px-0 xl:min-h-[460px] xl:justify-center xl:py-0">
        <h2 className="whitespace-pre-line text-[24px] font-semibold leading-[1.29] tracking-[-0.02em] text-white sm:text-[28px] xl:text-[40px]">
          {data.title}
        </h2>

        <p className="mt-[13px] max-w-[590px] xl:max-w-[780px] text-[12px] font-normal leading-[1.5] text-[#DBE1FF] sm:text-[14px] xl:text-[16px]">
          {data.description}
        </p>

        <Link
          href={data.cta.href}
          className="mt-[29px] inline-flex min-h-[35px] xl:min-h-[40px] xl:w-[150px] items-center justify-center rounded-full bg-white px-6 text-[11px] xl:text-[12px] font-semibold text-[#003CA3] shadow-[0_3px_8px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#EAF0FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {data.cta.label}
        </Link>
      </div>
    </section>
  );
};

export default EventsCTASection;

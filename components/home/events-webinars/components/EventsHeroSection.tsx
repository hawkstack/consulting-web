import type { EventsHeroData } from "@/components/home/events-webinars/types/events-webinars";

type EventsHeroSectionProps = {
  data: EventsHeroData;
};

const EventsHeroSection = ({ data }: EventsHeroSectionProps) => {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto flex min-h-[308px] w-full max-w-[1170px] flex-col items-center px-8 pb-14 pt-[50px] text-center sm:min-h-[397px] sm:items-start sm:px-[36px] sm:pb-14 sm:pt-20 sm:text-left lg:min-h-[390px] lg:px-10 xl:px-0 lg:pt-[72px]">
        <span className="rounded-full bg-[#E5EBF6] px-3 py-[4px] text-[10px] font-semibold leading-normal tracking-[0.1em] text-[#003CA3] sm:px-4 sm:py-[6px] sm:text-[12px] xl:text-[14px]">
          {data.eyebrow}
        </span>

        <h1 className="mt-3 max-w-[270px] text-[24px] font-semibold leading-[1.2] tracking-[-0.04em] text-[#191C1E] sm:mt-7 sm:max-w-[620px] sm:text-[34px] sm:leading-[1.23] lg:mt-6 lg:max-w-[650px]  lg:text-[42px] xl:max-w-[750px] xl:text-[48px]">
          {data.title}
        </h1>

        <p className="mt-2.5 max-w-[280px] text-[12px] font-normal leading-[1.5] text-[#434654] sm:mt-5 sm:max-w-[610px] sm:text-[14px] sm:leading-[1.5] lg:max-w-[650px] lg:text-[15px] xl:max-w-[770px] xl:text-[18px]">
          {data.description}
        </p>

        <a
          href={data.cta.href}
          className="mt-4 inline-flex min-h-9 items-center justify-center rounded-full bg-[#013CA3] px-[18px] text-[11px] font-semibold text-white shadow-[0_8px_12px_rgba(7,48,125,0.22)] transition-colors hover:bg-[#0A398E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1245A7] sm:mt-6 sm:min-h-[46px] sm:px-[26px] sm:text-[12px] xl:text-[14px]"
        >
          {data.cta.label}
        </a>
      </div>
    </section>
  );
};

export default EventsHeroSection;

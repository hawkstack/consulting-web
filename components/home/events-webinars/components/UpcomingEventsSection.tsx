import Image from "next/image";
import Link from "next/link";

import type { UpcomingEventsData } from "@/components/home/events-webinars/types/events-webinars";

type UpcomingEventsSectionProps = {
  data: UpcomingEventsData;
};

const UpcomingEventsSection = ({ data }: UpcomingEventsSectionProps) => {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto w-full max-w-[1170px] px-4 py-10 sm:px-9 sm:py-16 lg:px-10 lg:py-[72px] xl:px-0">
        <header className="flex flex-col items-center text-center md:items-start md:items-left">
          <h2 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.035em] text-[#191C1E] sm:text-[30px] lg:text-[34px] xl:text-[30px]">
            {data.title}
          </h2>
          <p className="mt-2 text-[12px] leading-[1.45] text-[#5E6573] sm:text-[14px] xl:text-[16px]">
            {data.description}
          </p>
        </header>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-[18px] lg:gap-5">
          {data.events.map((event) => (
            <article
              key={event.title}
              className="overflow-hidden rounded-[5px] border border-[#E2E8F0] bg-white"
            >
              <div className="relative aspect-[2.23/1] overflow-hidden bg-[#EAF2FA]">
                <Image
                  src={event.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute right-2 top-2 rounded-sm bg-[#C84D16] px-2 py-1 text-[9px] font-medium leading-none text-white">
                  Coming Soon
                </span>
              </div>

              <div className="flex min-h-[190px] flex-col px-4 py-4 sm:min-h-[204px] sm:px-5 sm:py-5 lg:min-h-[190px] lg:px-[15px] lg:py-[13px]">
                <h3 className="text-[18px] font-medium leading-[1.3] tracking-[-0.035em] text-[#191C1E] md:text-[24px]">
                  {event.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.45] text-[#363A46] xl:mt-2 xl:text-[16px]">
                  {event.description}
                </p>
                <p className="mt-3 text-[12px] md:text-[14px] font-medium uppercase tracking-[0.08em] text-[#697386] xl:mt-3">
                  Key topics:
                </p>
                <ul className="mt-1.5 xl:mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 xl:mt-1 xl:gap-y-1">
                  {event.topics.map((topic) => {
                    const Icon = topic.icon;

                    return (
                      <li
                        key={topic.label}
                        className="flex items-center gap-1.5 text-[14px] leading-[1.2] lg:text-[14px] text-[#404653] xl:text-[16px]"
                      >
                        <Icon className="size-4 xl:size-5 shrink-0 text-[#1551B8]" />
                        <span>{topic.label}</span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={data.registerInterest.href}
                  className="mt-2 md:mt-4 flex h-9 items-center justify-center rounded-[5px] bg-[#0743A8] px-4 text-[14px] md:text-[16px] font-medium text-white transition-colors hover:bg-[#06388E] xl:h-[40px] xl:text-[16px]"
                >
                  {data.registerInterest.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;

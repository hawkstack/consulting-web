import Link from "next/link";
import type { Metadata } from "next";
import { consultationBookingData as data } from "@/data/home/consultationBooking";

export const metadata: Metadata = {
  title: "Schedule a Consultation | HawkStack",
  description: "Book a conversation with HawkStack about infrastructure, cloud, modernization and technical consulting.",
};

export default function ScheduleConsultationPage() {
  return (
    <div lang="en" dir="ltr" className="bg-[#f5f8fc] font-lexend text-[#0a1731]">
      <div className="bg-[#06162d] px-5 pb-28 pt-10 text-white md:px-10 xl:px-[68px]">
        <div className="mx-auto max-w-[1180px]">
          <p className="mt-2 text-[10px] font-semibold tracking-[0.18em] text-[#35d6ed]">{data.eyebrow}</p>
          <h1 className="mt-3 max-w-[720px] text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.15] tracking-[-0.8px]">{data.title}</h1>
          <p className="mt-4 max-w-[680px] text-sm leading-[1.8] text-[#b8c8de]">{data.description}</p>
        </div>
      </div>
      <div className="relative mx-auto -mt-16 grid max-w-[1296px] gap-6 px-5 pb-12 md:px-10 lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)] xl:px-[68px]">
        <aside className="self-start rounded-[20px] border border-[#d4e1f0] bg-white p-6 shadow-[0_8px_30px_#17375308]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0066ff]">A conversation built around you</p>
          <h2 className="mt-3 text-xl font-semibold leading-snug">What can we help you move forward?</h2>
          <ul className="mt-6 space-y-5">
            {data.topics.map((topic, index) => (
              <li key={topic.title} className="flex gap-3">
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#eaf3ff] text-xs font-semibold text-[#075be0]">0{index + 1}</span>
                <div><h3 className="text-xs font-semibold">{topic.title}</h3><p className="mt-1 text-xs leading-[1.7] text-[#405b82]">{topic.description}</p></div>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-[#d4e1f0] pt-5 text-xs leading-[1.8] text-[#405b82]">{data.preparation}</p>
        </aside>
        <section aria-labelledby="booking-title" className="min-w-0 overflow-hidden rounded-[20px] border border-[#d4e1f0] bg-white shadow-[0_8px_30px_#17375308]">
          <div className="border-b border-[#e4ebf4] px-5 py-6 sm:px-7">
            <div aria-hidden="true" className="mb-4 h-1 w-10 rounded-full bg-[linear-gradient(100deg,#1fb28a,#075be0)]" />
            <h2 id="booking-title" className="text-2xl font-semibold">{data.meetingTitle}</h2>
            <p className="mt-2 text-xs leading-relaxed text-[#405b82]">{data.meetingDescription}</p>
          </div>
          <iframe src={data.embedUrl} title="Book a consultation with HawkStack — available dates and times" className="block h-[760px] w-full border-0 sm:h-[720px]" />
          <div className="border-t border-[#e4ebf4] px-5 py-4 sm:px-7">
            <a href={data.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-[#075be0] underline underline-offset-4 hover:text-[#064bc7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075be0]">{data.fallbackLabel} <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </div>
  );
}

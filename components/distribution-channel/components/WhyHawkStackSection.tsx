import { whyHawkStackContent as content } from "@/components/distribution-channel/data/distributionChannelData";

export default function WhyHawkStackSection() {
  return (
    <section className="bg-[#f6f9ff] px-5 py-12 font-lexend text-[#172a47] sm:px-8 lg:px-12 lg:py-[58px] xl:px-[5%]">
      <div className="mx-auto grid max-w-[1170px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[7.2%]">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.14em] text-[#3454ff]">
            {content.eyebrow}
          </p>
          <h2 className="mt-[24px] max-w-[540px] text-[28px] font-semibold leading-[1.33] tracking-[-0.02em] sm:text-[34px] xl:text-[36px]">
            {content.heading}
          </h2>
          <p className="mt-[36px] max-w-[550px] text-[14px] leading-[1.75] text-[#40536f] sm:text-[15px]">
            {content.description}
          </p>
          <a
            href={content.actionHref}
            className="mt-[56px] inline-flex min-h-[46px] min-w-[237px] items-center justify-center rounded-[8px] bg-[#3454ff] px-6 text-[12px] font-semibold text-white transition-colors hover:bg-[#263fd1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3454ff]"
          >
            {content.actionLabel}
          </a>
        </div>

        <div className="min-w-0">
          {content.items.map((item) => (
            <article
              key={item.number}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-6 border-t border-[#dbe4f1] py-[22px] first:pt-[22px] last:pb-0 sm:grid-cols-[28px_minmax(0,1fr)] sm:gap-x-6"
            >
              <span className="pt-[5px] text-[10px] font-bold text-[#3454ff]">
                {item.number}
              </span>
              <div className="min-w-0">
                <h3 className="text-[18px] font-semibold leading-[1.35] tracking-[-0.01em] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-[18px] text-[13px] leading-[1.7] text-[#40536f] sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

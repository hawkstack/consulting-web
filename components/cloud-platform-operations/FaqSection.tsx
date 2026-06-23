import { FaqContent } from "@/app/types/cloud-platform-operations";

type Props = {
  content: FaqContent;
};

export default function FaqSection({ content }: Props) {
  return (
    <section className="w-full bg-white font-lexend py-12 md:py-16 lg:py-24 xl:py-20 px-4 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[760px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h5 className="text-[#00B6CC] text-[12px] md:text-[16px] font-bold uppercase tracking-[0.18em] mb-2">
            {content.subTitle}
          </h5>

          <h2 className="text-[26px] md:text-[32px] xl:text-[48px] font-bold text-[#000000] leading-tight">
            {content.title}
          </h2>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-3 md:space-y-4">
          {content.faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-[#E5E7EB] rounded-2xl px-5 md:px-6 py-4 md:py-5 shadow-[0_0_0_1px_rgba(0,0,0,0.01)]"
            >
              <h4 className="text-[14px] md:text-[22px] font-semibold text-[#000000] mb-1 leading-snug">
                {faq.question}
              </h4>

              <p className="text-[12px] md:text-[16px] text-[#000000] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}

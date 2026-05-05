import { RedHatAIOverviewData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface Props {
  data: RedHatAIOverviewData;
}

const RedHatAIOverviewSection = ({ data }: Props) => {
  const { tag, heading, description, cards } = data;

  return (
    <section className="w-full bg-[#f6f6f6] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[#EE0000] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
              {tag}
            </p>

            <h2 className="text-[22px] md:text-4xl lg:text-[42px] xl:text-[48px] font-bold text-[#111] leading-tight mb-5 max-w-[420px]">
              {heading}
            </h2>

            <p className="text-gray-600 text-xs md:text-base lg:text-lg leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 md:gap-5">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-5 lg:p-6 flex gap-4 items-start"
              >
                {/* Number */}
                <div className="min-w-[36px] h-[36px] md:min-w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-[#FFF0F0] text-[#EE0000] text-sm xl:text-base font-semibold">
                  {String(card.id).padStart(2, "0")}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#111] mb-1">
                    {card.title}
                  </h3>

                  <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatAIOverviewSection;

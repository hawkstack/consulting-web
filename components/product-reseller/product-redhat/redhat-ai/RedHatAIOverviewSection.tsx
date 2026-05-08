import { RedHatAIOverviewData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface Props {
  data: RedHatAIOverviewData;
}

const RedHatAIOverviewSection = ({ data }: Props) => {
  const { tag, heading, description, cards } = data;

  return (
    <section className="w-full bg-[#f6f6f6] py-12 md:py-16 lg:py-20 ">
      <div className="md:w-[700px] lg:w-[920px] xl:w-[1180px] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-2 md:gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[#EE0000] text-xs xl:text-sm font-bold tracking-widest uppercase mb-4 text-center md:text-left">
              {tag}
            </p>

            <h2 className="text-[22px] md:text-3xl lg:text-[36px] xl:text-[48px] font-bold text-[#111] leading-tight mb-5 md:max-w-[250px] lg:max-w-[420px] text-center md:text-left">
              {heading}
            </h2>

            <p className="text-gray-600 text-xs md:text-sm lg:text-lg leading-relaxed md:w-xs lg:w-md hidden md:block">
              {description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 md:gap-5">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-3 lg:p-6 flex gap-4 items-start"
              >
                {/* Number */}
                <div className="min-w-[36px] h-[36px] md:min-w-[40px] md:h-[40px] flex items-center justify-center rounded-full bg-[#FFF0F0] text-[#EE0000] text-sm xl:text-base font-semibold">
                  {String(card.id).padStart(2, "0")}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm md:text-sm lg:text-base xl:text-xl font-semibold text-[#111] mb-1">
                    {card.title}
                  </h3>

                  <p className="text-xs md:text-xs xl:text-base text-gray-600 leading-relaxed">
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

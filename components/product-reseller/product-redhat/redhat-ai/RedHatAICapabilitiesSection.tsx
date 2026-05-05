import { RedHatAICapabilitiesData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface Props {
  data: RedHatAICapabilitiesData;
}

const RedHatAICapabilitiesSection = ({ data }: Props) => {
  const { cards } = data;

  return (
    <section className="w-full bg-gradient-to-r from-[#EE0000] via-[#C80000] to-[#5B0000] py-12 md:py-16 lg:py-20">
      <div className="w-[270px] md:w-[700px] lg:w-[920px] xl:w-[1160px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                bg-white/10
                border border-white/20
                backdrop-blur-md
                rounded-xl md:rounded-2xl
                p-4 md:p-4 lg:p-6
                text-white
              "
            >
              <h3 className="text-2xl lg:text-3xl xl:text-[42px] font-semibold mb-2 text-[#F7F7F7]">
                {card.title}
              </h3>

              <p className="text-xs lg:text-sm xl:text-base text-[#FFFFFFD1]/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedHatAICapabilitiesSection;

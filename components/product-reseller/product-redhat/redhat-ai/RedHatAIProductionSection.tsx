import {
  RedHatAIProductionCard,
  RedHatAIProductionSectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

interface RedHatAIProductionSectionProps {
  data: RedHatAIProductionSectionData;
}

const ProductionCard = ({ card }: { card: RedHatAIProductionCard }) => {
  return (
    <div
      className="
        rounded-[20px]
        border border-white/10
        bg-[#111111]
        p-5
        transition-all duration-300
        hover:border-[#EE0000]/40
        hover:bg-[#151515] 
      "
    >
      <h3
        className="
          text-[20px]
          font-semibold
          leading-[1.2]
          text-white
          md:text-[20px]
          xl:text-[22px]
        "
      >
        {card.title}
      </h3>

      <p
        className="
          mt-4
          text-[12px]
          leading-6
          text-white/60
          md:text-[12px]
          lg:text-[14px]
          xl:text-base
        "
      >
        {card.description}
      </p>
    </div>
  );
};

const RedHatAIProductionSection = ({
  data,
}: RedHatAIProductionSectionProps) => {
  return (
    <section className="bg-black py-14 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-center">
          <span
            className="
              font-bold
              uppercase
              tracking-[0.30em]
              text-[#EE0000]
              text-xs xl:text-sm
            "
          >
            {data.tag}
          </span>

          <h2
            className="
              mx-auto mt-5
              max-w-[850px]
              font-semibold
              leading-[1.05]
              text-white
              text-[22px]
              md:text-[30px]
              lg:text-[36px]
              xl:text-[48px]
            "
          >
            {data.title}
          </h2>

          <p
            className="
              hidden md:block
              mx-auto mt-5
              md:w-[600px] lg:w-[780px]
              text-sm
              leading-7
              text-white/60
              md:text-sm
              lg:text-lg
            "
          >
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mx-auto mt-12
            grid w-[300px] md:w-[670px] lg:w-[800px] xl:w-[1180px]
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {data.cards.map((card) => (
            <ProductionCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedHatAIProductionSection;

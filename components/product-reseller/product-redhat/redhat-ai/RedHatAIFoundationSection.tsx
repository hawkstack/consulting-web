import {
  RedHatAIFoundationCard,
  RedHatAIFoundationSectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import Link from "next/link";

interface RedHatAIFoundationSectionProps {
  data: RedHatAIFoundationSectionData;
  titleClassName?: string;
}

const FoundationCard = ({ card }: { card: RedHatAIFoundationCard }) => {
  return (
    <div
      className="
        rounded-[18px]
        border border-[#DCDCDC]
        bg-[#F7F7F7]
        p-4 xl:p-5
        shadow-[0px_2px_10px_rgba(0,0,0,0.03)]
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {card.badge && (
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[15px] bg-[#000000] text-xs font-bold text-white">
          {card.badge}
        </div>
      )}

      <h3
        className="
          text-base xl:text-xl xl:h-[38px]
          font-bold
          leading-[1.25]
          text-[#151515]
        "
      >
        {card.title}
      </h3>

      <p
        className="
          mt-4 xl:h-[100px] w-[280px] xl:w-full
          text-xs xl:text-base
          leading-6
          text-[#676767] 
        "
      >
        {card.description}
      </p>

      <Link
        href={card.href}
        className="
          mt-5 inline-flex
          text-xs xl:text-base font-bold
          text-[#EE0000]
          transition-colors duration-300
          hover:text-[#C40000]
        "
      >
        {card.ctaText}
      </Link>
    </div>
  );
};

const RedHatAIFoundationSection = ({
  data,
  titleClassName = "xl:w-[790px]",
}: RedHatAIFoundationSectionProps) => {
  return (
    <section className="bg-[#F3F3F3] py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto w-full xl:w-[860px] text-center">
          <span
            className="
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#EE0000]
              text-xs xl:text-sm
            "
          >
            {data.tag}
          </span>

          <h2
            className={`
              mx-auto mt-4
              w-full
              font-bold
              leading-[1.08]
              text-[#161616]
              text-[22px] md:text-3xl lg:text-[36px] xl:text-[48px]
              ${titleClassName}
            `}
          >
            {data.title}
          </h2>

          <p
            className="
              hidden md:block
              mx-auto mt-5
              w-full md:w-[660px] lg:w-[790px]
              leading-7
              text-[#5C5C5C]
              text-base md:text-sm lg:text-lg
            "
          >
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mx-auto mt-6 md:mt-12
            grid w-[300px] md:w-[660px] lg:w-[800px] xl:w-[1180px]
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {data.cards.map((card) => (
            <FoundationCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RedHatAIFoundationSection;

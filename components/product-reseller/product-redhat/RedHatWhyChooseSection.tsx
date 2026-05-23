import { WhyChooseSectionData } from "@/app/types/product-reseller/product-redhat/product-redhat";

interface Props {
  data: WhyChooseSectionData;
}

const RedHatWhyChooseSection = ({ data }: Props) => {
  const { heading, subheading, highlightText, cards } = data;

  return (
    <section className="w-full bg-[#0A0F1C] text-[#FFFFFF] py-16 px-4 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">
          {heading}{" "}
          {highlightText && (
            <span className="text-[#C40000]">{highlightText}</span>
          )}
        </h2>

        <p className="mt-3 text-sm md:text-base text-[#FFFFFF] max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto">
          {subheading}
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const isRed = card.variant === "red";

            return (
              <div
                key={index}
                className={`rounded-4xl p-6 md:p-8 text-left ${
                  isRed
                    ? "bg-gradient-to-br from-[#EE0000] to-[#8C0000]"
                    : "bg-[#171c28] border border-gray-800"
                }`}
              >
                <h3 className="text-2xl xl:text-xl font-semibold mb-4">
                  {card.title}
                </h3>

                <ul className="space-y-4">
                  {card.items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      {/* Custom Tick Icon */}
                      <div
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          isRed ? "bg-red-500" : "bg-gray-700"
                        }`}
                      >
                        {/* Replace this with your custom icon */}
                        <span className="text-white text-xs">✓</span>
                      </div>

                      <p className="text-sm md:text-[15px] leading-normal text-gray-300 ">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RedHatWhyChooseSection;

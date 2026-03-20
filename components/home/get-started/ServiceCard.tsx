import GradientTick from "../../icons/GradientTick";

type Feature = {
  text: string;
  label: string;
};

type Props = {
  pillText: string;
  title: string;
  description: string;
  features: Feature[];
  idealFor: string[];
  ctaText: string;
  onClick: () => void;
  cardClass: string;
};

const ServiceCard = ({
  pillText,
  title,
  description,
  features,
  idealFor,
  ctaText,
  onClick,
  cardClass,
}: Props) => {
  return (
    <div className={cardClass}>
      {/* Top pill */}
      <div className="absolute -top-4 left-1/2 flex w-full -translate-x-1/2 items-center gap-2 px-4 md:px-10">
        <span className="h-0 w-full bg-[#3AFF7C]/40" />
        <div className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] px-4 py-1.5 md:px-6 md:py-2 text-[12px] md:text-[14px] font-semibold text-black">
          {pillText}
        </div>
        <span className="h-0 w-full bg-[#3AFF7C]/40" />
      </div>

      <div className="text-center">
        <h3 className="font-lexend text-[12px] md:text-[18px] font-medium leading-[100%] text-white flex justify-center">
          {title}
        </h3>

        <p className="mt-3 text-[13px] md:text-[15px] md:max-w-[700px] md:mx-auto leading-[140%] text-white font-lexend">
          {description}
        </p>

        {/* Feature cards */}
        <div className="mt-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 xl:block xl:space-y-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#0E2547] px-4 py-3 text-center font-lexend text-[12px] md:text-[13px] leading-[140%] text-white rounded-xl"
            >
              {item.text}
              <div className="mt-1 text-[12px] font-semibold text-[#8EC5FF]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Ideal for */}
        <div className="mt-6 text-left">
          <p className="font-lexend text-[12px] md:text-[14px] leading-[140%] text-white mb-4">
            Ideal for:
          </p>

          <ul className="space-y-2 text-[12px] md:text-[14px] font-lexend text-white md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-3 xl:grid-cols-1 xl:gap-x-0">
            {idealFor.map((item, i) => (
              <li key={i} className="flex items-center gap-2 xl:text-[12px]">
                <GradientTick />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={onClick}
          className="flex h-[36px] md:h-[38px] w-[246.37px] md:w-[280px] items-center justify-center rounded-full bg-gradient-to-r from-[#09173A] to-[#03070D] font-lexend text-[12px] md:text-[14px] font-medium text-white shadow-[5px_5px_10px_0px_#132943] mt-8 mx-auto"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

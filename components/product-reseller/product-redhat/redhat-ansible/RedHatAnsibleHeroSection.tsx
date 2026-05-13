import { RedHatAnsibleHeroData } from "@/app/types/product-reseller/product-redhat/redhat-ansible/redhat-ansible";
import CheckIcon from "@/components/icons/product-reseller/redhat-ai/CheckIcon";

interface Props {
  data: RedHatAnsibleHeroData;
}

const RedHatAnsibleHeroSection = ({ data }: Props) => {
  const {
    badge,
    heading,
    description,
    primaryButtonText,
    secondaryButtonText,
    features,
    statusList,
    capabilityCards,
  } = data;

  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="relative md:w-[700px] lg:w-[920px] xl:w-[1180px] mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-[620px] flex flex-col items-center md:items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4b1b1b] bg-[#160909] px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#EE0000]" />

            <p className="text-[10px] lg:text-xs text-[#f5dede] font-medium text-center">
              {badge}
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-center md:text-left text-[34px] md:text-[48px] lg:text-[56px] xl:text-[72px] leading-[1] font-bold text-white tracking-[-2px] max-w-[680px]">
            {heading.title}{" "}
            <span className="text-[#FF4B4B]">{heading.highlight}</span>
          </h1>

          {/* Description */}
          <p className="hidden md:block mt-6 text-center md:text-left text-[#9d9d9d] text-sm md:text-sm lg:text-lg xl:text-xl leading-relaxed max-w-[620px]">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row justify-center md:justify-start items-center md:items-start gap-4">
            <button className="bg-[#EE0000] hover:bg-[#ff1a1a] transition-all duration-300 text-white text-[11px] lg:text-sm xl:text-base font-semibold rounded-full px-6 py-3">
              {primaryButtonText}
            </button>

            <button className="border border-[#2a2a2a] bg-[#111111] hover:bg-[#181818] transition-all duration-300 text-white text-[11px] lg:text-sm xl:text-base font-semibold rounded-full px-6 py-3">
              {secondaryButtonText}
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-3">
            {features.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <CheckIcon />
                <p className="text-xs lg:text-sm text-[#a3a3a3]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative w-full max-w-[420px]">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#EE0000]/20 blur-3xl rounded-[32px]" />

          {/* Main Card */}
          <div className="relative rounded-[32px] border border-[#3a2a2a] bg-[#0D0D0D] p-5 md:p-6 backdrop-blur-xl">
            {/* Browser Dots */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#EE0000]" />
              <div className="w-3 h-3 rounded-full bg-[#5b5b5b]" />
              <div className="w-3 h-3 rounded-full bg-[#5b5b5b]" />
            </div>

            {/* Status List */}
            <div className="space-y-3">
              {statusList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-[#252525] bg-[#181818] px-4 py-4"
                >
                  <p className="text-xs md:text-sm font-medium text-white">
                    {item.title}
                  </p>

                  <span className="rounded-full bg-[#123c2f] px-3 py-1 text-[10px] font-bold tracking-wide text-[#71E39D]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {capabilityCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl border border-[#3a1d1d] bg-[linear-gradient(180deg,#241111_0%,#141414_100%)] p-4 md:p-5"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[11px] lg:text-xs text-[#9d9d9d] leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatAnsibleHeroSection;

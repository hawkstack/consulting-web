import { CTASectionData } from "@/app/types/contact";

interface Props {
  data: CTASectionData;
}

const ContactCta = ({ data }: Props) => {
  const { badge, heading, description, buttonText, highlightText } = data;

  return (
    <section className="relative w-full overflow-hidden bg-[#020617] text-white py-16 md:py-20 lg:py-24">
      {/* Top Tilt Shape (FIXED) */}
      <div
        className="absolute top-0 left-0 w-full h-16 md:h-24 bg-[#F8F9FF] z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      />
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0B1A3A] to-[#0F2A6B] opacity-95 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {badge && (
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 text-xs xl:text-sm text-gray-300">
            {badge}
          </div>
        )}

        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
          {heading}
          {highlightText && (
            <span className="text-[#AEBCFF]">{highlightText}</span>
          )}
        </h2>

        <p className="text-[#AEB9EA] text-sm md:text-base mb-6 max-w-[520px] mx-auto">
          {description}
        </p>

        <button className="px-6 lg:px-10 py-1 lg:py-2 text-xs md:text-base xl:text-lg rounded-full bg-[#3560FF] text-white font-medium hover:opacity-90 transition">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ContactCta;

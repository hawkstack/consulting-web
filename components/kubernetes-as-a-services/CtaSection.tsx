import { CtaData } from "@/app/types/kubernetes-as-a-services";
import React from "react";

interface Props {
  data: CtaData;
}

const CtaSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="w-full bg-[#020617] py-16 px-4 md:px-14 lg:px-20 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <div
          className="
          relative rounded-4xl
          bg-[linear-gradient(90deg,rgba(34,211,238,0.1),rgba(255,255,255,0.05),rgba(168,85,247,0.12))]
          py-12 md:py-4 lg:py-8 xl:py-8
          text-center
          border border-white/10
          shadow-lg
        "
        >
          {/* Tag */}
          <p className="text-[#22D3EE] text-xs xl:text-sm font-semibold tracking-widest uppercase mb-1">
            {data.tag}
          </p>

          {/* Title */}
          <h2 className="text-white font-bold leading-tight text-[20px] md:text-[22px] lg:text-[28px] xl:text-[44px] max-w-[74%] xl:max-w-[80%] mx-auto">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-[#CBD5E1] text-xs xl:text-base mt-2 md:max-w-xl lg:max-w-3xl mx-auto">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            {data.buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.link || "#"}
                className={`
                  md:px-2 lg:px-4 xl:px-6 md:py-2 lg:py-2 xl:py-3 rounded-xl lg:rounded-2xl text-xs lg:text-sm xl:text-base font-semibold transition-all duration-300
                  ${
                    btn.variant === "primary"
                      ? "bg-white text-[#0F172A] hover:bg-gray-200"
                      : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
                  }
                `}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

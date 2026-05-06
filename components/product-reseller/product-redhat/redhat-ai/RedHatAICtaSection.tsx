import { RedHatAICtaData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import Link from "next/link";

interface RedHatAICtaSectionProps {
  data: RedHatAICtaData;
}

const RedHatAICtaSection = ({ data }: RedHatAICtaSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-[25%] bg-red-700/30 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          className="
            relative mx-auto flex max-w-[896px] flex-col items-center
            rounded-[42px] border border-white/10
            bg-white/[0.06]
            px-2 md:px-6 py-12
            text-center
            shadow-[0_0_60px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            md:px-12 md:py-14
          "
        >
          {/* Inner Gradient */}
          <div className="absolute inset-0 rounded-[42px] bg-gradient-to-r from-red-600/20 via-transparent to-white/5" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Tag */}
            <span
              className="
                mb-5 text-[11px] font-bold uppercase tracking-[0.32em]
                text-[#EE0000]
                md:text-xs
              "
            >
              {data.tag}
            </span>

            {/* Title */}
            <h2
              className=" 
                w-full max-w-[710px]
                font-semibold leading-[1.1]
                text-white
                text-[24px] md:text-[30px] lg:text-[32px] xl:text-[48px]
              "
            >
              {data.title}
            </h2>

            {/* Description */}
            <p
              className="
                hidden md:block
                mt-5 max-w-xl
                text-xs leading-4 md:leading-7
                text-white/65
                md:text-sm xl:text-lg
              "
            >
              {data.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              {data.buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={`
                    rounded-full px-7 py-3 text-sm lg:text-base font-semibold
                    transition-all duration-300
                    ${
                      button.variant === "primary"
                        ? `
                          bg-[#EE0000]
                          text-white
                          hover:scale-[1]
                          hover:bg-[#ff3c1d]
                        `
                        : `
                          border border-white/10
                          bg-white/10
                          text-white
                          backdrop-blur-md
                          hover:bg-white/15
                        `
                    }
                  `}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatAICtaSection;

import { CTASectionData } from "@/app/types/hire-from-us/hire-from-us";

interface CTASectionProps {
  data: CTASectionData;
}

export default function CTASection({ data }: CTASectionProps) {
  const { title, description, email, website, buttonText } = data;

  return (
    <section className="w-full bg-[#F5F5F5] py-8 lg:bg-white lg:py-10">
      <div className="mx-auto w-full lg:max-w-[1000px] xl:max-w-[1230px] px-4 md:px-8">
        <div
          className="
            rounded-[34px]
            bg-white
            px-6
            py-10
            text-center
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]

            lg:flex
            lg:items-center
            lg:justify-between
            md:bg-[#001437]
            md:py-[24px]
            lg:px-[48px]
            lg:py-[28px]
            lg:text-left
          "
        >
          <div className="mx-auto max-w-[960px] lg:mx-0">
            <h2
              className="
                text-[#2D5BFF]
                text-[24px]
                font-bold
                leading-[32px]

                md:text-white
                md:text-[32px]
                lg:text-[36px]
                lg:leading-[42px]
                lg:tracking-[-0.02em]
                xl:text-[48px]
                xl:leading-[60px]
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-4
                mx-auto lg:mx-0
                text-[14px]
                leading-[22px]
                text-[#555555]
                md:max-w-[520px]
                lg:max-w-[600px]
                xl:max-w-[840px]

                lg:mt-3
                md:text-[12px]
                lg:leading-[18px]
                md:text-white/70
                xl:text-[15px]
                xl:leading-[28px]
              "
            >
              {description}
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-5
                md:mt-2
                lg:mt-5
                lg:justify-start
                lg:gap-3
              "
            >
              <a
                href={`mailto:${email}`}
                className="
                  text-[13px]
                  font-semibold
                  text-[#2D5BFF]

                  lg:h-[26px]
                  md:px-4
                  md:rounded-full
                  md:border
                  md:border-white/20
                  md:bg-white/10
                  md:text-[12px]
                  xl:text-[15px]
                  md:py-2
                  lg:py-4
                  xl:py-5
                  md:text-white
                  lg:flex
                  lg:items-center
                  lg:justify-center
                "
              >
                {email}
              </a>

              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[13px]
                  font-semibold
                  text-[#2D5BFF]

                  lg:h-[26px]
                  md:px-4
                  md:rounded-full
                  md:border
                  md:border-white/20
                  md:bg-white/10
                  md:text-[12px]
                  xl:text-[15px]
                  md:py-2
                  lg:py-4
                  xl:py-5
                  md:text-white
                  lg:flex
                  lg:items-center
                  lg:justify-center
                "
              >
                {website}
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="
                mt-8
                md:mt-4
                h-[40px]
                rounded-[10px]
                bg-[#2D5BFF]
                px-6
                text-[14px]
                md:text-[11px]
                font-semibold
                text-white

                lg:hidden
              "
            >
              {buttonText}
            </button>
          </div>

          {/* Desktop Button */}
          <button
            className="
              hidden
              lg:block
              h-[38px]
              min-w-[82px]
              rounded-[8px]
              bg-[#0048FF]
              px-5
              text-[11px]
              xl:text-[15px]
              font-semibold
              text-white
              whitespace-nowrap
              hover:bg-[#2149df]
              transition-colors
            "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

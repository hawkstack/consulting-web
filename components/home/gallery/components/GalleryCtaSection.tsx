import Link from "next/link";
import { GalleryCtaSectionData } from "../types/awards-recognitions";

type GalleryCtaSectionProps = {
  data: GalleryCtaSectionData;
};

const cardStyles = {
  consulting: {
    card: "bg-[#075bd4]",
    action: "text-[#075bd4]",
    icon: "border-[#1569da]",
  },
  training: {
    card: "bg-[#05722f]",
    action: "text-[#05722f]",
    icon: "border-[#05722f]",
  },
};

function BuildingDecorIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 166.667 150"
      className="absolute bottom-[18px] right-[-16px] h-[88px] w-[98px] text-white opacity-10 md:bottom-[10px] md:right-[-13px] md:h-[112px] md:w-[124px] lg:bottom-[20px] lg:right-[-18px] lg:h-[132px] lg:w-[146px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 150V0H83.3333V33.3333H166.667V150H0ZM16.6667 133.333H66.6667V116.667H16.6667V133.333ZM16.6667 100H66.6667V83.3333H16.6667V100ZM16.6667 66.6667H66.6667V50H16.6667V66.6667ZM16.6667 33.3333H66.6667V16.6667H16.6667V33.3333ZM83.3333 133.333H150V50H83.3333V133.333ZM100 83.3333V66.6667H133.333V83.3333H100ZM100 116.667V100H133.333V116.667H100Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TerminalDecorIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 166.667 133.333"
      className="absolute bottom-[16px] right-[-12px] h-[80px] w-[100px] text-white opacity-10 md:bottom-[0] md:right-[-10px] md:h-[104px] md:w-[130px] lg:bottom-[35px] lg:right-[-16px] lg:h-[117px] lg:w-[146px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 133.333C12.0833 133.333 8.15972 131.701 4.89583 128.438C1.63194 125.174 0 121.25 0 116.667V16.6667C0 12.0833 1.63194 8.15972 4.89583 4.89583C8.15972 1.63194 12.0833 0 16.6667 0H150C154.583 0 158.507 1.63194 161.771 4.89583C165.035 8.15972 166.667 12.0833 166.667 16.6667V116.667C166.667 121.25 165.035 125.174 161.771 128.438C158.507 131.701 154.583 133.333 150 133.333H16.6667ZM16.6667 116.667H150V33.3333H16.6667V116.667ZM45.8333 108.333L34.1667 96.6667L55.625 75L33.9583 53.3333L45.8333 41.6667L79.1667 75L45.8333 108.333ZM83.3333 108.333V91.6667H133.333V108.333H83.3333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GalleryCtaSection({ data }: GalleryCtaSectionProps) {
  return (
    <section
      aria-label="Gallery actions"
      className="w-full bg-[#eef3ff] font-lexend shadow-[0_-8px_22px_rgba(76,139,230,0.28),0_8px_22px_rgba(76,139,230,0.28),inset_0_4px_12px_rgba(255,255,255,0.38),inset_0_-4px_12px_rgba(255,255,255,0.28)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-6 md:py-14 lg:px-[67px] lg:py-[84px]  xl:py-[85px] xl:px-[67px] my-20">
        <div className="mx-auto grid max-w-[986px] grid-cols-1 gap-10 md:max-w-[652px] md:grid-cols-2 md:gap-5 lg:max-w-[986px] lg:gap-7 xl:max-w-[1146px] xl:gap-7">
          {data.cards.map((card) => {
            const styles = cardStyles[card.variant];
            const isTraining = card.variant === "training";

            return (
              <article
                key={card.title}
                className={`relative min-h-[144px] overflow-hidden rounded-[7px] px-6 py-6 text-white md:min-h-[188px] md:px-7 md:py-7 lg:min-h-[282px] lg:rounded-[10px] lg:px-[42px] lg:py-[44px] xl:min-h-[282px] ${styles.card}`}
              >
                <div className="relative z-10 max-w-[230px] md:max-w-[250px] lg:max-w-[450px]">
                  <h2 className="text-[18px] font-bold leading-tight tracking-[0] md:text-[20px] lg:text-[28px] xl:text-[30px]">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-[10px] font-normal leading-[1.55] tracking-[0] md:mt-3 md:text-[11px] lg:mt-4 lg:text-[17px] lg:leading-[1.45] xl:text-[18px]">
                    {card.description}
                  </p>

                  <Link
                    href={card.href}
                    className={`mt-4 inline-flex h-[26px] min-w-[158px] items-center justify-center gap-2 rounded-[5px] bg-white px-4 text-[8px] font-bold leading-none transition-colors hover:bg-[#f3f8ff] md:mt-5 md:h-[32px] md:min-w-[156px] md:text-[10px] lg:mt-8 lg:h-[50px] lg:min-w-[232px] lg:rounded-[8px] lg:text-[14px] xl:h-[50px] ${styles.action}`}
                  >
                    <span>{card.actionLabel}</span>
                    {isTraining ? (
                      <span
                        aria-hidden="true"
                        className={`relative h-[12px] w-[14px] lg:h-[17px] lg:w-[19px]`}
                      >
                        <span
                          className={`absolute left-1/2 top-[2px] h-[8px] w-[8px] -translate-x-1/2 rotate-45 border-2 ${styles.icon}`}
                        />
                        <span
                          className={`absolute bottom-0 left-1/2 h-[4px] w-[12px] -translate-x-1/2 rounded-b-full border-x-2 border-b-2 ${styles.icon}`}
                        />
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className={`relative h-[12px] w-[12px] border-2 lg:h-[16px] lg:w-[16px] ${styles.icon}`}
                      >
                        <span
                          className={`absolute -right-[3px] -top-[3px] h-[8px] w-[8px] border-r-2 border-t-2 lg:h-[10px] lg:w-[10px] ${styles.icon}`}
                        />
                      </span>
                    )}
                  </Link>
                </div>

                {isTraining ? <TerminalDecorIcon /> : <BuildingDecorIcon />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

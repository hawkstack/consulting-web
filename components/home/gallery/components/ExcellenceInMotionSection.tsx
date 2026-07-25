import Image from "next/image";
import { ExcellenceInMotionSectionData } from "../types/awards-recognitions";

type ExcellenceInMotionSectionProps = {
  data: ExcellenceInMotionSectionData;
};

export default function ExcellenceInMotionSection({
  data,
}: ExcellenceInMotionSectionProps) {
  return (
    <section
      aria-label={data.title}
      className="w-full bg-[#eaf4ff] bg-cover bg-center font-lexend"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="mx-auto max-w-[1440px] px-4 py-7 md:px-8 md:py-8 lg:px-10 lg:py-9 xl:px-12 xl:py-11">
        <div className="mx-auto w-full max-w-[610px] md:max-w-[633px] lg:max-w-[920px] xl:max-w-[1160px]">
          <h2 className="text-[14px] font-bold leading-none tracking-[0] text-[#065bd4] md:text-[20px] lg:text-[28px] xl:text-[52px]">
            {data.title}
          </h2>

          <div className="mt-6 grid w-full grid-cols-3 grid-rows-[auto_auto] items-start gap-x-2 gap-y-2 md:mt-7 md:gap-x-3 md:gap-y-2 lg:mt-9 lg:gap-x-5 lg:gap-y-4 xl:gap-x-6">
            {data.images.map((image) => (
              <div
                key={image.src}
                className={`relative w-full overflow-hidden rounded-[7px] md:rounded-[9px] lg:rounded-[10px] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 370px, (min-width: 1024px) 293px, (min-width: 768px) 203px, 31vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

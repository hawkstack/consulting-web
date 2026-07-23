import { communityPresenceSectionData } from "../data/awards-recognitions";
import { CommunityPresenceSectionData } from "../types/awards-recognitions";

type CommunityPresenceSectionProps = {
  data?: CommunityPresenceSectionData;
};

export default function CommunityPresenceSection({
  data = communityPresenceSectionData,
}: CommunityPresenceSectionProps) {
  return (
    <section className="w-full bg-[#eaf4ff] font-lexend">
      <div className="mx-auto flex min-h-[132px] max-w-[1440px] flex-col items-center justify-center px-7 py-8 text-center md:min-h-[196px] md:px-16 md:py-12 lg:min-h-[225px] lg:px-20 xl:px-24">
        <h2 className="text-[28px] font-bold leading-[1.1] tracking-[0] text-[#061f4b] md:text-[46px] lg:text-[52px]">
          {data.title}
        </h2>
        <p className="mt-4 max-w-[330px] text-[11px] font-normal leading-[1.45] tracking-[0] text-[#30354b] md:max-w-[610px] md:text-[16px] lg:max-w-[620px]">
          {data.description}
        </p>
      </div>
    </section>
  );
}

import AwardsRecognitionsSection from "@/components/home/gallery/components/AwardsRecognitionsSection";
import CommunityPresenceSection from "@/components/home/gallery/components/CommunityPresenceSection";
import GalleryStatsSection from "@/components/home/gallery/components/GalleryStatsSection";
import RedHatRecognitionSection from "@/components/home/gallery/components/RedHatRecognitionSection";
import {
  awardsRecognitionsSectionData,
  communityPresenceSectionData,
  galleryStatsSectionData,
  redHatRecognitionSectionData,
} from "@/components/home/gallery/data/awards-recognitions";
import { seoMeta } from "@/components/seo/seoMeta";

export const metadata = seoMeta({
  title: "Gallery | Awards & Recognitions",
  description:
    "Awards and recognitions earned by HawkStack Technologies Private Limited.",
});

export default function GalleryPage() {
  return (
    <>
      <AwardsRecognitionsSection data={awardsRecognitionsSectionData} />
      <GalleryStatsSection data={galleryStatsSectionData} />
      <RedHatRecognitionSection data={redHatRecognitionSectionData} />
      <CommunityPresenceSection data={communityPresenceSectionData} />
    </>
  );
}

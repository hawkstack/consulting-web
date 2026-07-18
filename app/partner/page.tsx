import HeroSection from "@/components/home/partner/components/HeroSection";
import HawkstackAdvantageSection from "@/components/home/partner/components/HawkstackAdvantageSection";
import PartnerCategoriesSection from "@/components/home/partner/components/PartnerCategoriesSection";
import {
  partnerHeroData,
  partnerHawkstackAdvantageData,
  partnerCategoriesData,
} from "@/components/home/partner/data/partner";

const PartnerPage = () => {
  return (
    <main>
      <HeroSection data={partnerHeroData} />
      <HawkstackAdvantageSection data={partnerHawkstackAdvantageData} />
      <PartnerCategoriesSection data={partnerCategoriesData} />
    </main>
  );
};

export default PartnerPage;

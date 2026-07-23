import HeroSection from "@/components/home/partner/components/HeroSection";
import HawkstackAdvantageSection from "@/components/home/partner/components/HawkstackAdvantageSection";
import PartnerCategoriesSection from "@/components/home/partner/components/PartnerCategoriesSection";
import CTASection from "@/components/home/partner/components/CTASection";
import PartnerTabs from "@/components/home/partner/components/PartnerTabs";
import {
  partnerHeroData,
  partnerHawkstackAdvantageData,
  partnerCategoriesData,
  partnerCTASectionData,
  partnerTabsData,
} from "@/components/home/partner/data/partner";

const PartnerPage = () => {
  return (
    <main>
      <HeroSection data={partnerHeroData} />
      <PartnerTabs data={partnerTabsData} />
      <HawkstackAdvantageSection data={partnerHawkstackAdvantageData} />
      <PartnerCategoriesSection data={partnerCategoriesData} />
      <CTASection data={partnerCTASectionData} />
    </main>
  );
};

export default PartnerPage;

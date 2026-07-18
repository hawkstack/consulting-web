import HeroSection from "@/components/home/partner/components/HeroSection";
import HawkstackAdvantageSection from "@/components/home/partner/components/HawkstackAdvantageSection";
import {
  partnerHeroData,
  partnerHawkstackAdvantageData,
} from "@/components/home/partner/data/partner";

const PartnerPage = () => {
  return (
    <main>
      <HeroSection data={partnerHeroData} />
      <HawkstackAdvantageSection data={partnerHawkstackAdvantageData} />
    </main>
  );
};

export default PartnerPage;

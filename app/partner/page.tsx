import HeroSection from "@/components/home/partner/components/HeroSection";
import { partnerHeroData } from "@/components/home/partner/data/partner";

const PartnerPage = () => {
  return (
    <main>
      <HeroSection data={partnerHeroData} />
    </main>
  );
};

export default PartnerPage;

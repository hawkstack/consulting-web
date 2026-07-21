import CategoriesTabsSection from "@/components/home/trends-insights/components/CategoriesTabsSection";
import LatestTechnicalPerspectivesSection from "@/components/home/trends-insights/components/LatestTechnicalPerspectivesSection";
import RealWorldImpactSection from "@/components/home/trends-insights/components/RealWorldImpactSection";
import TechnologyInsightsNewsletterSection from "@/components/home/trends-insights/components/TechnologyInsightsNewsletterSection";
import TrendsInsightsHeroSection from "@/components/home/trends-insights/components/TrendsInsightsHeroSection";
import {
  realWorldImpactData,
  trendsInsightsHeroData,
} from "@/components/home/trends-insights/data/trendsInsights";

const TrendsInsightsPage = () => {
  return (
    <main>
      <TrendsInsightsHeroSection data={trendsInsightsHeroData} />
      <CategoriesTabsSection />
      <LatestTechnicalPerspectivesSection />
      <RealWorldImpactSection data={realWorldImpactData} />
      <TechnologyInsightsNewsletterSection />
    </main>
  );
};

export default TrendsInsightsPage;

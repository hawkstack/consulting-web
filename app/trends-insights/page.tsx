import CategoriesTabsSection from "@/components/home/trends-insights/components/CategoriesTabsSection";
import LatestTechnicalPerspectivesSection from "@/components/home/trends-insights/components/LatestTechnicalPerspectivesSection";
import RealWorldImpactSection from "@/components/home/trends-insights/components/RealWorldImpactSection";
import TechnologyInsightsNewsletterSection from "@/components/home/trends-insights/components/TechnologyInsightsNewsletterSection";
import TrendsInsightsHeroSection from "@/components/home/trends-insights/components/TrendsInsightsHeroSection";
import {
  categoriesTabsData,
  realWorldImpactData,
  technologyInsightsNewsletterData,
  trendsInsightsHeroData,
} from "@/components/home/trends-insights/data/trendsInsights";

const TrendsInsightsPage = () => {
  return (
    <main>
      <TrendsInsightsHeroSection data={trendsInsightsHeroData} />
      <LatestTechnicalPerspectivesSection />
      <RealWorldImpactSection data={realWorldImpactData} />
      <CategoriesTabsSection data={categoriesTabsData} />
      <TechnologyInsightsNewsletterSection data={technologyInsightsNewsletterData} />
    </main>
  );
};

export default TrendsInsightsPage;

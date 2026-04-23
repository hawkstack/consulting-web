import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import TrainingEcosystem from "@/components/training-services/TrainingEcosystem";
import TrainingPortfolio from "@/components/training-services/TrainingPortfolio";
import { trainingServicesPageData } from "@/data/training-services/training-services";

export default function TrainingServicesPage() {
    const { heroSectionData, trainingEcosystemData, trainingPortfolioData } = trainingServicesPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <TrainingEcosystem content={trainingEcosystemData} />
        <TrainingPortfolio content={trainingPortfolioData}/>
        </>
    );
}

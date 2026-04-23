import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import TrainingEcosystem from "@/components/training-services/TrainingEcosystem";
import { trainingServicesPageData } from "@/data/training-services/training-services";

export default function TrainingServicesPage() {
    const { heroSectionData, trainingEcosystemData } = trainingServicesPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <TrainingEcosystem content={trainingEcosystemData} />
        </>
    );
}

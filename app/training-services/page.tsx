import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import { trainingServicesPageData } from "@/data/training-services/training-services";

export default function TrainingServicesPage() {
    const { heroSectionData } = trainingServicesPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        </>
    );
}

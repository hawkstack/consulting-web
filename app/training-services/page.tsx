import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import TrainingEcosystem from "@/components/training-services/TrainingEcosystem";
import TrainingPortfolio from "@/components/training-services/TrainingPortfolio";
import TrainingsWeGive from "@/components/training-services/TrainingsWeGive";
import DeliveryOptions from "@/components/training-services/DeliveryOptions";
import { trainingServicesPageData } from "@/data/training-services/training-services";

export default function TrainingServicesPage() {
    const { heroSectionData, trainingEcosystemData, trainingPortfolioData, trainingsWeGiveData, deliveryOptionData } = trainingServicesPageData;
    
    return (
        <>
            <AppModernizationHeroSection content={heroSectionData} />
            <TrainingEcosystem content={trainingEcosystemData} />
            <TrainingPortfolio content={trainingPortfolioData}/>
            <TrainingsWeGive content={trainingsWeGiveData} />       
            <DeliveryOptions content={deliveryOptionData}/>        
        </>
    );
}

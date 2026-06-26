import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import TrainingEcosystem from "@/components/services/training-services/components/TrainingEcosystem";
import TrainingPortfolio from "@/components/services/training-services/components/TrainingPortfolio";
import TrainingsWeGive from "@/components/services/training-services/components/TrainingsWeGive";
import DeliveryOptions from "@/components/services/training-services/components/DeliveryOptions";
import { trainingServicesPageData } from "@/components/services/training-services/data/training-services";

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

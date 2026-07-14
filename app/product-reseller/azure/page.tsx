import {
  AzureCompetenciesSection,
  AzureEngineeringSection,
  AzureHeroSection,
  AzureSkillsAccelerationSection,
  azureCompetenciesData,
  azureEngineeringData,
  azureHeroData,
  azureSkillsAccelerationData,
} from "@/components/product-reseller/product-azure";

export default function AzurePage() {
  return (
    <>
      <AzureHeroSection data={azureHeroData} />
      <AzureCompetenciesSection data={azureCompetenciesData} />
      <AzureEngineeringSection data={azureEngineeringData} />
      <AzureSkillsAccelerationSection data={azureSkillsAccelerationData} />
    </>
  );
}

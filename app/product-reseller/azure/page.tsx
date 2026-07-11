import {
  AzureCompetenciesSection,
  AzureHeroSection,
  azureCompetenciesData,
  azureHeroData,
} from "@/components/product-reseller/product-azure";

export default function AzurePage() {
  return (
    <>
      <AzureHeroSection data={azureHeroData} />
      <AzureCompetenciesSection data={azureCompetenciesData} />
    </>
  );
}

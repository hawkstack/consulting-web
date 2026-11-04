import DistributionChannelHero from "@/components/distribution-channel/components/DistributionChannelHero";
import DistributionOutcomesSection from "@/components/distribution-channel/components/DistributionOutcomesSection";
import DistributionPlatformsSection from "@/components/distribution-channel/components/DistributionPlatformsSection";
import InfrastructurePlatformsSection from "@/components/distribution-channel/components/InfrastructurePlatformsSection";

export default function DistributionChannelPage() {
  return (
    <main>
      <DistributionChannelHero />
      <DistributionOutcomesSection />
      <DistributionPlatformsSection />
      <InfrastructurePlatformsSection />
    </main>
  );
}

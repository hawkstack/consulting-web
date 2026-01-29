import ChallengeSolution from "@/components/unified/ChallengeSolutionSection";
import HeroSection from "@/components/unified/HeroSection";
import WhatYouWillReceive from "@/components/unified/WhatYouReceive";
import YourInfrastructure from "@/components/unified/YourInfrastructure";
export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
      <ChallengeSolution />
      <WhatYouWillReceive />
      <YourInfrastructure />
    </>
  );
}
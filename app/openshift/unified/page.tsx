import DiscussRedHat from "@/components/openshift/Form";
import ChallengeSolution from "@/components/unified/ChallengeSolutionSection";
import HeroSection from "@/components/unified/HeroSection";
import WhatYouWillReceive from "@/components/unified/WhatYouReceive";
import YourInfrastructure from "@/components/unified/YourInfrastructure";
import WhatWeDeliver from "@/components/unified/WhatWeDeliver";
export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
      <WhatWeDeliver  />
      <ChallengeSolution />
      <WhatYouWillReceive />
      <div className="block md:hidden">
        <DiscussRedHat source="unified" />
      </div>
      <YourInfrastructure />
    </>
  );
}

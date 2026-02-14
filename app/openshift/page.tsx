import WhatWeDeliver from "@/components/openshift/WhatWeDeliver";
import HeroSection from "@/components/openshift/HeroSection";
import ChallengeSolution from "@/components/openshift/ChallengeSolutionSection";
import YourInfrastructure from "@/components/openshift/YourInfrastructure";
import WhatYouWillReceive from "@/components/openshift/WhatYouReceive";
import DiscussRedHat from "@/components/openshift/Form";

export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
      <WhatWeDeliver />
      <ChallengeSolution />
      <YourInfrastructure />
      <WhatYouWillReceive />
      <div className="block md:hidden">
        <DiscussRedHat />
      </div>
      <YourInfrastructure />
    </>
  );
}

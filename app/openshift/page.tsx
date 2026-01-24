import WhatWeDeliver from "@/components/openshift/WhatWeDeliver";
import HeroSection from "@/components/openshift/Herosection";
import ChallengeSolution from "@/components/openshift/ChallengeSolutionSection";
import WhatYouWillReceive from "@/components/openshift/WhatYouReceive";

export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
      <WhatWeDeliver />
      <ChallengeSolution />
      <WhatYouWillReceive />
    </>
  );
}

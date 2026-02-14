import DiscussRedHat from "@/components/openshift/Form";
import ChallengeSolution from "@/components/unified/ChallengeSolutionSection";
import HeroSection from "@/components/unified/HeroSection";
<<<<<<< HEAD
import WhatYouWillReceive from "@/components/unified/WhatYouReceive";
import YourInfrastructure from "@/components/unified/YourInfrastructure";
=======
import WhatWeDeliver from "@/components/unified/WhatWeDeliver";
>>>>>>> 0a15bc5ed83528c9f5d1f0a70466ce28677ada9a
export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
<<<<<<< HEAD
      <ChallengeSolution />
      <WhatYouWillReceive />
      <div className="block md:hidden">
        <DiscussRedHat source="unified" />
      </div>
      <YourInfrastructure />
=======
      <WhatWeDeliver />
>>>>>>> 0a15bc5ed83528c9f5d1f0a70466ce28677ada9a
    </>
  );
}

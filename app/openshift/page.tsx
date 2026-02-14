import WhatWeDeliver from "@/components/openshift/WhatWeDeliver";
<<<<<<< HEAD
import HeroSection from "@/components/openshift/Herosection";
=======
import HeroSection from "@/components/openshift/HeroSection";
>>>>>>> 0a15bc5ed83528c9f5d1f0a70466ce28677ada9a
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
        <DiscussRedHat source="openshift"/>
      </div>
      <YourInfrastructure />
    </>
  );
}

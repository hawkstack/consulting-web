import WhatWeDeliver from "@/components/openshift/WhatWeDeliver";
// import HeroSection from "@/components/openshift/Herosection";
import YourInfrastructure from "@/components/openshift/YourInfrastructure";
import WhatYouWillReceive from "@/components/openshift/WhatYouReceive";

export default function OpenShiftPage() {
  return (
    <>
      {/* <HeroSection /> */}
      <WhatWeDeliver />
      <YourInfrastructure />
      <WhatYouWillReceive />
    </>
  );
}

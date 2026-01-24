import WhatWeDeliver from "@/components/openshift/WhatWeDeliver";
import HeroSection from "@/components/openshift/HeroSection";
import WhatYouWillReceive from "@/components/openshift/WhatYouReceive";

export default function OpenShiftPage() {
  return (
    <>
      <HeroSection />
      <WhatWeDeliver />
      <WhatYouWillReceive />
    </>
  );
}

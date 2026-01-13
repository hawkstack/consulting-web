// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta"
import WhyHawkstackCircle from "@/components/whyHawkstack/WhyHawkstackSVG";
import WhyHawkstackSction from "@/components/whyHawkstack/whyHawkstackSction";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Enterprise Cloud & Automation Consulting",
  description:
    "We help enterprises modernize applications, automate operations, and build secure cloud-native platforms.",
})

const Home = () => {
  return (
    <>
      <WhyHawkstackSction title={"Why HawkStack"} discription={"HawkStack delivers real, hands-on cloud skills that translate directly into real-world impact."} />
    </>
  )
}
export default Home;

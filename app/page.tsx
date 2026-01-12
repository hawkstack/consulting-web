// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta"
import HeroSection from "@/components/home/HeroSection";
import RotatingCircle from "@/components/circle-rotation/Rotating-circle";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Enterprise Cloud & Automation Consulting",
  description:
    "We help enterprises modernize applications, automate operations, and build secure cloud-native platforms.",
})

const Home = () => {
  return (
    <>
    <HeroSection />
    <RotatingCircle />
    </>
  )
}
export default Home;

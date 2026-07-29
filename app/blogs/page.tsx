import BlogCategoriesSection from "@/components/home/blogs/components/BlogCategoriesSection";
import BlogTopicsSection from "@/components/home/blogs/components/BlogTopicsSection";
import CertificationPathsSection from "@/components/home/blogs/components/CertificationPathsSection";
import CTASection from "@/components/home/blogs/components/CTASection";
import EngineeringToolkitSection from "@/components/home/blogs/components/EngineeringToolkitSection";
import FeaturedBlogSection from "@/components/home/blogs/components/FeaturedBlogSection";
import HeroSection from "@/components/home/blogs/components/HeroSection";
import LatestEngineeringUpdatesSection from "@/components/home/blogs/components/LatestEngineeringUpdatesSection";
import SuccessStoriesSection from "@/components/home/blogs/components/SuccessStoriesSection";
import {
  blogCategoriesData,
  blogHeroData,
  featuredBlogData,
  latestEngineeringUpdatesData,
  successStoriesData,
  certificationPathsData,
  engineeringToolkitData,
  ctaData,
  blogTopicsData,
} from "@/components/home/blogs/data/blogs";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection data={blogHeroData} />
      <BlogTopicsSection data={blogTopicsData} />
      <FeaturedBlogSection data={featuredBlogData} />
      <LatestEngineeringUpdatesSection data={latestEngineeringUpdatesData} />
      <BlogCategoriesSection data={blogCategoriesData} />
      <SuccessStoriesSection data={successStoriesData} />
      <CertificationPathsSection data={certificationPathsData} />
      <EngineeringToolkitSection data={engineeringToolkitData} />
      <CTASection data={ctaData} />
    </div>
  );
};

export default page;

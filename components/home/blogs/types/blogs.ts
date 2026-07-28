import type { ComponentType } from "react";
export type BlogHeroData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badgeText: string;
};

export type FeaturedBlogData = {
  eyebrow: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export type LatestEngineeringUpdate = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "center" | "right";
};

export type LatestEngineeringUpdatesData = {
  title: string;
  description: string;
  updates: LatestEngineeringUpdate[];
};

export type BlogCategoryIcon = ComponentType<{ className?: string }>;

export type ArchitectureBlueprint = {
  title: string;
  description: string;
  icon: BlogCategoryIcon;
};

export type BlogCategoriesData = {
  trendingTitle: string;
  trendingDescription: string;
  technologies: string[];
  blueprintsTitle: string;
  blueprints: ArchitectureBlueprint[];
};

export type SuccessStoryMetric = {
  label: string;
  icon: BlogCategoryIcon;
};

export type SuccessStory = {
  label: string;
  title: string;
  description: string;
  metrics: SuccessStoryMetric[];
  tags: string[];
};

export type SuccessStoriesData = {
  title: string;
  stories: SuccessStory[];
};

export type CertificationPath = {
  title: string;
  description: string;
  icon: BlogCategoryIcon;
};

export type CertificationPathsData = {
  title: string;
  description: string;
  paths: CertificationPath[];
};

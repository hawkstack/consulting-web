import type {
  RealWorldImpactData,
  TrendsInsightsHeroData,
} from "@/components/home/trends-insights/types/trendsInsights";

// Hero Section data
export const trendsInsightsHeroData: TrendsInsightsHeroData = {
  eyebrow: "EXPERT KNOWLEDGE BASE",
  title: {
    prefix: "Trends &",
    highlight: " Insights",
  },
  description:
    "Technology is transforming the way businesses innovate, operate, and compete. We share expert perspectives, technical best practices, and industry insights to help organizations navigate cloud transformation, AI adoption, and enterprise infrastructure modernization.",
  curatedForLabel: "Curated for:",
  audiences: [
    "IT Leaders",
    "Cloud Architects",
    "DevOps Engineers",
    "Developers",
  ],
  scrollLabel: "SCROLL TO EXPLORE",
};

// Real world impact data
export const realWorldImpactData: RealWorldImpactData = {
  title: "Real-World Impact",
  description:
    "See how HawkStack helps industry leaders transform their technical landscape and achieve measurable business outcomes.",
  dashboardImage: "/images/trends-insights/dashboard-placeholder.webp",
  dashboardImageAlt: "Infrastructure analytics dashboard",
  optimization: {
    eyebrow: "OPTIMIZATION",
    title: "Infrastructure Cost Optimization",
    description:
      "We helped a global fintech leader reduce their annual cloud spend by 35% through intelligent workload scheduling and automated resource scaling.",
    statistics: [
      { value: "35%", label: "Cost Reduction" },
      { value: "99.99%", label: "Availability" },
    ],
  },
  devOps: {
    title: "DevOps Automation",
    description:
      "Reduced deployment time from days to minutes through custom CI/CD pipeline engineering for a Fortune 500 retailer.",
    linkLabel: "Read Success Story",
  },
};

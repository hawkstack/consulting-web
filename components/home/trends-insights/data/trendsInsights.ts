import type {
  RealWorldImpactData,
  TechnologyInsightsNewsletterData,
  TrendsInsightsHeroData,
} from "@/components/home/trends-insights/types/trendsInsights";
import SubscribersIcon from "@/components/icons/trends-insights/SubscribersIcon";
import TechnicalArticlesIcon from "@/components/icons/trends-insights/TechnicalArticlesIcon";
import WebinarsHostedIcon from "@/components/icons/trends-insights/WebinarsHostedIcon";

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

// Technology insights newsletter data
export const technologyInsightsNewsletterData: TechnologyInsightsNewsletterData =
  {
    title: {
      prefix: "Stay Updated with the Lates ",
      highlight: "Technology Insights",
    },
    description:
      "Explore the expert articles, real-world guides, webinars, and industry news delivered directly to your inbox.",
    statistics: [
      {
        value: "15,000+",
        label: "Subscribers",
        description: "Join a growing community of tech professionals",
        icon: SubscribersIcon,
      },
      {
        value: "250+",
        label: "Technical Articles",
        description: "In depth insights on emerging technologies",
        icon: TechnicalArticlesIcon,
      },
      {
        value: "50+",
        label: "Webinars Hosted",
        description: "Live sessions with industry experts",
        icon: WebinarsHostedIcon,
      },
    ],
  };

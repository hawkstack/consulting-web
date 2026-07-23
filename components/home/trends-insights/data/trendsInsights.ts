import type {
  CategoriesTabsData,
  LatestTechnicalPerspectivesData,
  RealWorldImpactData,
  TechnologyInsightsNewsletterData,
  TrendsInsightsHeroData,
} from "@/components/home/trends-insights/types/trendsInsights";
import SubscribersIcon from "@/components/icons/trends-insights/SubscribersIcon";
import TechnicalArticlesIcon from "@/components/icons/trends-insights/TechnicalArticlesIcon";
import WebinarsHostedIcon from "@/components/icons/trends-insights/WebinarsHostedIcon";
import CloudNativePlatformsIcon from "@/components/icons/trends-insights/CloudNativePlatformsIcon";
import ModernizeLegacyIcon from "@/components/icons/trends-insights/ModernizeLegacyIcon";
import SecureHybridCloudIcon from "@/components/icons/trends-insights/SecureHybridCloudIcon";

export const trendsInsightsHeroData: TrendsInsightsHeroData = {
  eyebrow: "EXPERT KNOWLEDGE BASE",
  title: { prefix: "Trends &", highlight: " Insights" },
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

export const latestTechnicalPerspectivesData: LatestTechnicalPerspectivesData =
  {
    title: { prefix: "Latest", highlight: " Technical Perspectives" },
    description: "Deep dives into the architectures shaping the real decade.",
    articles: [
      {
        title: "Modernizing Legacy Applications with Kubernetes",
        description:
          "Implement cloud-native microservices, containers, and DevOps patterns to achieve unprecedented scalability and speed in enterprise environments.",
        tags: ["Microservices", "Cloud Migration"],
        image: "/images/trends-insights/kubernetes-modernization.webp",
        imageAlt: "Article image placeholder",
        imageSide: "start",
      },
      {
        title: "The Future of Enterprise AI",
        description:
          "How organizations are shifting from experimentation to production-scale operational efficiency and intelligent automation.",
        tags: ["Enterprise AI"],
        image: "/images/trends-insights/enterprise-ai.webp",
        imageAlt: "Article image placeholder",
        imageSide: "end",
      },
      {
        title: "Why Cloud-Native Architecture Matters",
        description:
          "The core principles behind cloud-native design that enable faster innovation, scale and robust dynamic resilience.",
        tags: ["Resilience", "Scalability"],
        image: "/images/trends-insights/cloud-native-architecture.webp",
        imageAlt: "Article image placeholder",
        imageSide: "start",
      },
      {
        title: "Kubernetes Virtualization with KubeVirt",
        description:
          "Bridge the gap between legacy and modern. Run traditional VMs alongside containers on a unified Kubernetes control plane for gradual, risk-free modernization.",
        tags: ["KubeVirt", "Modernization"],
        image: "/images/trends-insights/kubevirt-virtualization.webp",
        imageAlt: "Article image placeholder",
        imageSide: "end",
      },
    ],
  };

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

export const categoriesTabsData: CategoriesTabsData = {
  categories: [
    {
      title: "Secure Hybrid Cloud",
      description:
        "Zero-trust security implementation across multi-cloud environments for high-compliance healthcare providers.",
      accentColor: "#0644B8",
      icon: SecureHybridCloudIcon,
    },
    {
      title: "Cloud-Native Platforms",
      description:
        "Building future-proof foundations that scale horizontally with zero manual intervention.",
      accentColor: "#8D2904",
      icon: CloudNativePlatformsIcon,
    },
    {
      title: "Modernize Legacy",
      description:
        "Seamless transition of monolithic systems into agile, containerized microservices without downtime.",
      accentColor: "#0644B8",
      icon: ModernizeLegacyIcon,
    },
  ],
};

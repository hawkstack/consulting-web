import type {
  HawkstackAdvantageSectionData,
  PartnerCategoriesSectionData,
  PartnerHeroData,
} from "@/components/home/partner/types/partner";
import AIDataAnalyticsIcon from "@/components/icons/partner/AIDataAnalyticsIcon";
import CloudServiceIcon from "@/components/icons/partner/CloudServiceIcon";
import ConsultingPartnersIcon from "@/components/icons/partner/ConsultingPartnersIcon";
import CustomerCentricIcon from "@/components/icons/partner/CustomerCentricIcon";
import CybersecurityIcon from "@/components/icons/partner/CybersecurityIcon";
import EndToEndIcon from "@/components/icons/partner/EndToEndIcon";
import EnterpriseSoftwareIcon from "@/components/icons/partner/EnterpriseSoftwareIcon";
import InfrastructurePartnersIcon from "@/components/icons/partner/InfrastructurePartnersIcon";
import InnovationIcon from "@/components/icons/partner/InnovationIcon";
import MicrosoftSolutionsIcon from "@/components/icons/partner/MicrosoftSolutionsIcon";
import OpenSourceIcon from "@/components/icons/partner/OpenSourceIcon";
import TechnologyIcon from "@/components/icons/partner/TechnologyIcon";

export const partnerHeroData: PartnerHeroData = {
  eyebrow: "GLOBAL PARTNER PROGRAM",
  title: {
    highlight: "Innovation Through",
    text: " Global Collaboration",
  },
  description:
    "Our partner ecosystem is built on the belief that innovation grows stronger when we build together. Scale your reach with enterprise-grade technical expertise and global support.",
  // buttons: [
  //   {
  //     label: "Join The Ecosystem →",
  //     href: "#partner-ecosystem",
  //     variant: "primary",
  //   },
  //   {
  //     label: "Partner Directory",
  //     href: "#partner-directory",
  //     variant: "secondary",
  //   },
  // ],
};

export const partnerHawkstackAdvantageData: HawkstackAdvantageSectionData = {
  heading: "The HawkStack Advantage",
  cards: [
    {
      icon: TechnologyIcon,
      title: "Technology Expertise",
      description:
        "Deep technical immersion in cloud native architectures, containerization and enterprise infrastructure management.",
    },
    {
      icon: CustomerCentricIcon,
      title: "Customer-Centric Approach",
      description:
        "Strategic alignment focused on delivering tangible business outcomes and solving complex stakeholder challenges.",
    },
    {
      icon: EndToEndIcon,
      title: "End-to-End Delivery",
      description:
        "Complete lifecycle management from initial architecture design to sustained operational excellence and support.",
    },
    {
      icon: InnovationIcon,
      title: "Innovation First",
      description:
        "Constant evolution through rapid prototyping and integration of cutting-edge technologies into standard workflows.",
    },
  ],
};

export const partnerCategoriesData: PartnerCategoriesSectionData = {
  heading: "Partner Categories",
  description:
    "Explore specialized tracks tailored for different industry pillars and technical specializations within our network.",
  categories: [
    {
      icon: CloudServiceIcon,
      title: "Cloud Service Providers",
      category: "INFRASTRUCTURE",
    },
    {
      icon: CybersecurityIcon,
      title: "Cybersecurity Vendors",
      category: "PROTECTION",
    },
    {
      icon: EnterpriseSoftwareIcon,
      title: "Enterprise Software",
      category: "SAAS / PAAS",
    },
    {
      icon: InfrastructurePartnersIcon,
      title: "Infrastructure Partners",
      category: "HARDWARE & NETWORKING",
    },
    {
      icon: AIDataAnalyticsIcon,
      title: "AI & Data Analytics",
      category: "DATA SCIENCE",
    },
    {
      icon: MicrosoftSolutionsIcon,
      title: "Microsoft Solutions",
      category: "ECOSYSTEM",
    },
    {
      icon: OpenSourceIcon,
      title: "Open Source Communities",
      category: "CONTRIBUTION",
    },
    {
      icon: ConsultingPartnersIcon,
      title: "Consulting Partners",
      category: "STRATEGY",
    },
  ],
};

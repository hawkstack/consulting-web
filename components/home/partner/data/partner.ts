import type {
  HawkstackAdvantageSectionData,
  PartnerHeroData,
} from "@/components/home/partner/types/partner";
import CustomerCentricIcon from "@/components/icons/partner/CustomerCentricIcon";
import EndToEndIcon from "@/components/icons/partner/EndToEndIcon";
import InnovationIcon from "@/components/icons/partner/InnovationIcon";
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

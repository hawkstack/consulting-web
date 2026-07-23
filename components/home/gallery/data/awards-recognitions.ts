import {
  AwardsRecognitionsSectionData,
  CommunityPresenceSectionData,
  GalleryStatsSectionData,
  RedHatRecognitionSectionData,
} from "../types/awards-recognitions";

export const awardsRecognitionsSectionData: AwardsRecognitionsSectionData = {
  title: "Awards &",
  highlightedTitle: "Recognitions",
  description:
    "Celebrating industry milestones, official Red Hat partner accolades, and core community contributions by HawkStack Technologies Private Limited.",
  actions: [
    {
      label: "Explore Achievements",
      href: "/about-us",
      variant: "primary",
    },
    {
      label: "Talk to Our Experts",
      href: "/contact-us",
      variant: "secondary",
    },
  ],
};

export const galleryStatsSectionData: GalleryStatsSectionData = {
  stats: [
    {
      value: "114+",
      label: "Enterprise Clients",
      valueClassName: "text-[#065bd4]",
      mobileOrder: "order-1",
      desktopOrder: "lg:order-1",
    },
    {
      value: "0.5k+",
      label: "Projects Delivered",
      valueClassName: "text-[#065bd4]",
      mobileOrder: "order-3",
      desktopOrder: "lg:order-2",
    },
    {
      value: "2.3k+",
      label: "Engineers Trained",
      valueClassName: "text-[#065bd4]",
      mobileOrder: "order-2",
      desktopOrder: "lg:order-3",
    },
    {
      value: "6.9k+",
      label: "Cloud Deployments",
      valueClassName: "text-[#087b3c]",
      mobileOrder: "order-4",
      desktopOrder: "lg:order-4",
    },
  ],
};

export const redHatRecognitionSectionData: RedHatRecognitionSectionData = {
  eyebrow: "Strategic Partnership",
  title: "Red Hat Recognition",
  description:
    "Honoring our deep collaboration and technical proficiency across the entire OpenShift and Ansible portfolio.",
  cards: [
    {
      badge: "2023 Award",
      badgeClassName: "bg-[#ffd8d4] text-[#b4140d]",
      category: "Innovation Category",
      title: "Red Hat Apex Partner of the Year",
      description:
        "Recognized for delivering the most complex multi-cloud architecture migrations utilizing OpenShift 4.x for Fortune 500 financial institutions.",
    },
    {
      badge: "Certification",
      badgeClassName: "bg-[#008e48] text-white",
      category: "Consulting Specialization",
      title: "Elite Consulting Specialization",
      description:
        "One of the few global partners to maintain a 100% certified engineering bench across Advanced Automation and Managed Services.",
    },
  ],
};

export const communityPresenceSectionData: CommunityPresenceSectionData = {
  title: "Community Presence",
  description:
    "Tracking our path through the Kubernetes ecosystem and the labs where tomorrow's tech is born.",
  milestones: [
    {
      quarter: "Q1 2024",
      title: "Kubernetes Community Days",
      description:
        "Platinum sponsorship of the regional KCD events, fostering education and open-source contributions to the CNCF ecosystem.",
      side: "left",
      accentTextClassName: "text-[#065bd4]",
      accentDotClassName: "bg-[#065bd4]",
    },
    {
      quarter: "Q4 2023",
      title: "QCS DC Lab Launch",
      description:
        "The inauguration of our Washington DC innovation hub, dedicated to testing edge computing scenarios and secure hybrid cloud deployments.",
      side: "right",
      accentTextClassName: "text-[#007a3d]",
      accentDotClassName: "bg-[#007a3d]",
    },
    {
      quarter: "Q2 2023",
      title: "Enterprise Sponsorships",
      description:
        "Strategic alignment with global digital summits, highlighting our commitment to enterprise-scale digital literacy and DevOps maturity.",
      side: "left",
      accentTextClassName: "text-[#065bd4]",
      accentDotClassName: "bg-[#065bd4]",
    },
  ],
};

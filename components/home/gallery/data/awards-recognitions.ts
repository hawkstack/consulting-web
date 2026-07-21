import {
  AwardsRecognitionsSectionData,
  GalleryStatsSectionData,
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

// Redhat Hero data file

import {
  RedHatHeroData,
  RedHatOverviewData,
} from "@/app/types/product-reseller/red-hat";

export const redHatHeroData: RedHatHeroData = {
  title: "Your business runs",
  highlightText: "everywhere.",
  subtitle: "Your tech should too.",
  description:
    "According to Red Hat, nearly 50% of the Fortune 100 top companies and over 30% of the Fortune Global 500 use Red Hat OpenShift.",
  ctaPrimary: {
    text: "Explore Red Hat products",
    link: "#",
  },
  ctaSecondary: {
    text: "Contact an expert",
    link: "#",
  },
  image: "/images/product-seller/redhat-hero.webp", // your figma image
};

// Redhat overview data file

export const redhatOverviewData: RedHatOverviewData = {
  badge: "OUR SOLUTIONS",
  title: "Build on a reliable foundation.",
  highlightTitle: "Take your apps anywhere.",
  description:
    "Power your business with the industry’s leading enterprise open source solutions built for security, performance and flexibility.",
};

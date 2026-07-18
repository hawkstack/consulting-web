export type PartnerHeroButton = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type PartnerHeroData = {
  eyebrow: string;
  title: {
    highlight: string;
    text: string;
  };
  description: string;
  // buttons: PartnerHeroButton[];
};

import type { ComponentType, SVGProps } from "react";

export type HawkstackAdvantageCard = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export type HawkstackAdvantageSectionData = {
  heading: string;
  cards: HawkstackAdvantageCard[];
};

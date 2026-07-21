export type AwardsRecognitionAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type AwardsRecognitionsSectionData = {
  title: string;
  highlightedTitle: string;
  description: string;
  actions: AwardsRecognitionAction[];
};

export type GalleryStat = {
  value: string;
  label: string;
  valueClassName: string;
  mobileOrder: string;
  desktopOrder: string;
};

export type GalleryStatsSectionData = {
  stats: GalleryStat[];
};

export type RedHatRecognitionCard = {
  badge: string;
  badgeClassName: string;
  category: string;
  title: string;
  description: string;
};

export type RedHatRecognitionSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  cards: RedHatRecognitionCard[];
};

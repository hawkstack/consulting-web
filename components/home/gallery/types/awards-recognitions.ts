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

export type ExcellenceInMotionImage = {
  src: string;
  alt: string;
  className: string;
};

export type ExcellenceInMotionSectionData = {
  title: string;
  backgroundImage: string;
  images: ExcellenceInMotionImage[];
};

export type GalleryCtaCard = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  variant: "consulting" | "training";
};

export type GalleryCtaSectionData = {
  cards: GalleryCtaCard[];
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

export type CommunityPresenceMilestone = {
  quarter: string;
  title: string;
  description: string;
  side: "left" | "right";
  accentTextClassName: string;
  accentDotClassName: string;
};

export type CommunityPresenceSectionData = {
  title: string;
  description: string;
  milestones: CommunityPresenceMilestone[];
};

// Redhat hero Types file
export interface RedHatHeroData {
  title: string;
  highlightText?: string;
  subtitle: string;
  description: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary: {
    text: string;
    link: string;
  };
  image: string;
}

// Redhat overview Types file
export interface RedHatOverviewData {
  badge: string;
  title: string;
  highlightTitle: string;
  description: string;
}

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

export type BuildYourCareerData = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  card: {
    eyebrow: string;
    title: string;
    description: string;
    features: {
      id: string;
      number: string;
      title: string;
      description: string;
    }[];
  };
};

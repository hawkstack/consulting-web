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
  buttons: PartnerHeroButton[];
};

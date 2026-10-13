export type ProductShowcaseCopy = {
  eyebrow: string;
  title: [string, string];
  description: string;
  product: {
    category: string;
    status: string;
    summary: string;
    description: string;
    features: string[];
    ctaLabel: string;
    imageAlt: string;
  };
};

export type ProductShowcaseData = Omit<ProductShowcaseCopy, "product"> & {
  product: ProductShowcaseCopy["product"] & {
    name: string;
    href: string;
    image: string;
    logo: string;
  };
};

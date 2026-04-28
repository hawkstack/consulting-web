export type MegaItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  external?: boolean;
};

export type OfferingsMenuItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  href?: string;
};

export type OfferingsMenuFeature = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

export type OfferingsMenuContent = {
  tabs: {
    product: string;
    productResellers: string;
  };
  featured: OfferingsMenuFeature;
  resellers: OfferingsMenuItem[];
};

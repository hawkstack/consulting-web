export type MegaItem = {
  id: string;
  translationKey: string;
  label?: string;
  title?: string;
  description?: string;
  image: string;
  href?: string;
  external?: boolean;
};

export type OfferingsMenuItem = {
  id: string;
  translationKey: string;
  image?: string;
  badge?: string;
  href?: string;
};

export type OfferingsMenuFeature = {
  translationKey: string;
  image: string;
  primaryHref: string;
};

export type OfferingsMenuContent = {
  tabs: {
    product: string;
    productResellers: string;
  };
  featured: OfferingsMenuFeature;
  resellers: OfferingsMenuItem[];
};

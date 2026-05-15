export interface RedHatProductsHeroCard {
  title: string;
  description: string;
  className: string;
}

export interface RedHatProductsHeroData {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  highlights: string[];
  cards: RedHatProductsHeroCard[];
}

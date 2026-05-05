// RedHatAIOverviewSection types
export interface RedHatAIOverviewCard {
  id: number;
  title: string;
  description: string;
}

export interface RedHatAIOverviewData {
  tag: string;
  heading: string;
  description: string;
  cards: RedHatAIOverviewCard[];
}

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

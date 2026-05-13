// RedHatAnsibleHeroSection types

import { ComponentType } from "react";

export interface RedHatAnsibleHeroFeature {
  id: number;
  text: string;
  icon: ComponentType;
}

export interface RedHatAnsibleHeroStatus {
  id: number;
  title: string;
  status: string;
}

export interface RedHatAnsibleHeroCapabilityCard {
  id: number;
  title: string;
  subtitle: string;
}

export interface RedHatAnsibleHeroData {
  badge: string;

  heading: {
    title: string;
    highlight: string;
  };

  description: string;

  primaryButtonText: string;
  secondaryButtonText: string;

  features: RedHatAnsibleHeroFeature[];

  statusList: RedHatAnsibleHeroStatus[];

  capabilityCards: RedHatAnsibleHeroCapabilityCard[];
}

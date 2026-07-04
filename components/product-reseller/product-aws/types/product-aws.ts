import type { ComponentType } from "react";

export interface ProductAwsAction {
  label: string;
  href: string;
}

export interface ProductAwsHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryButton: ProductAwsAction;
  secondaryButton: ProductAwsAction;
}

export interface ProductAwsCtaContent {
  title: string;
  description: string;
  primaryButton: ProductAwsAction;
  secondaryButton: ProductAwsAction;
}

export interface ProductAwsInfrastructureSolution {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
}

export interface ProductAwsInfrastructureContent {
  title: string;
  description: string;
  solutions: ProductAwsInfrastructureSolution[];
}

export interface ProductAwsEnterpriseCapability {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface ProductAwsEnterpriseCapabilitiesContent {
  title: string;
  description: string;
  capabilities: ProductAwsEnterpriseCapability[];
}

export interface ProductAwsPageContent {
  hero: ProductAwsHeroContent;
  infrastructure: ProductAwsInfrastructureContent;
  enterpriseCapabilities: ProductAwsEnterpriseCapabilitiesContent;
  cta: ProductAwsCtaContent;
}

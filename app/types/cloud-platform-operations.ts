import { ComponentType } from "react";
import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export interface WhatWeDoCards {
    icon: ComponentType<{ className?: string }>;
    title:string;
    description: string;
};

export interface WhatWeDoContent {
    highlightedTitle: string;
    title: string;
    desc: string;
    cards: WhatWeDoCards[];
};

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqContent {
  subTitle: string;
  title: string;
  faqs: FaqItem[];
export interface Hawkstack {
    subTitle: string;
    title: string;
    description: string;
    badges: string[];
}

export interface CloudOperationsStep {
    id: number;
    stepNumber: string;
    title: string;
    description: string;
}

export interface CloudOperationsMetric {
    id: number;
    label: string;
    value: string;
    description: string;
}

export interface CloudOperationsModelSection {
    subTitle: string;
    title: string;
    steps: CloudOperationsStep[];
    metrics: CloudOperationsMetric[];
}

export interface WhyHawkstackContent {
    hawkstack: Hawkstack;
    cloudOperations: CloudOperationsModelSection;
}

export interface CloudPlatformOperationsPageData {
    heroSectionData: AppModernizationHeroContent;
    whatWeDoSectionData: WhatWeDoContent;
    faqSectionData: FaqContent;
    whyHawkstackSectionData: WhyHawkstackContent;
}

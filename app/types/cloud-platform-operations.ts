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
export interface ContactFormField {
  id: number;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
}

export interface ContactCtaContent {
  subTitle: string;
  title: string;
  description: string;
  buttonText: string;
  fields: ContactFormField[];
}

export interface CloudPlatformOperationsPageData {
    heroSectionData: AppModernizationHeroContent;
    whatWeDoSectionData: WhatWeDoContent;
    contactCtaData: ContactCtaContent;
}

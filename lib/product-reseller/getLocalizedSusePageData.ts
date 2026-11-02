import { suseHeroContent } from "@/components/product-reseller/product-suse/data/suseHero";
import { suseSolutions } from "@/components/product-reseller/product-suse/data/suseSolutions";
import { suseWhyChooseFeatures } from "@/components/product-reseller/product-suse/data/suseWhyChoose";
import { suseServicesContent } from "@/components/product-reseller/product-suse/data/suseServices";
import { susePriorities } from "@/components/product-reseller/product-suse/data/susePriorities";
import { suseDeliverySteps } from "@/components/product-reseller/product-suse/data/suseDeliveryApproach";
import { suseContactContent } from "@/components/product-reseller/product-suse/data/suseContact";
import type { SuseHeroContent } from "@/components/product-reseller/product-suse/types/suseHero";
import type { SuseSolution } from "@/components/product-reseller/product-suse/types/suseSolutions";
import type { SuseWhyChooseFeature } from "@/components/product-reseller/product-suse/types/suseWhyChoose";
import type { SuseServicesContent } from "@/components/product-reseller/product-suse/types/suseServices";
import type { SusePriority } from "@/components/product-reseller/product-suse/types/susePriorities";
import type { SuseDeliveryStep } from "@/components/product-reseller/product-suse/types/suseDeliveryApproach";
import type { SuseContactContent } from "@/components/product-reseller/product-suse/types/suseContact";

export type SusePageData = {
  hero: SuseHeroContent & { illustrationLabel: string };
  solutions: { eyebrow: string; heading: string; description: string; actionLabel: string; exploreLabel: string; items: readonly SuseSolution[] };
  whyChoose: { heading: string; description: string; items: readonly SuseWhyChooseFeature[] };
  services: SuseServicesContent;
  priorities: { heading: string; items: readonly SusePriority[] };
  delivery: { eyebrow: string; heading: string; steps: readonly SuseDeliveryStep[] };
  contact: SuseContactContent;
};

const susePageData: SusePageData = {
  hero: { ...suseHeroContent, illustrationLabel: "SUSE ecosystem: Linux, Kubernetes, and virtualization" },
  solutions: {
    eyebrow: "Our solutions",
    heading: "Open foundations. Greater possibilities.",
    description: "Connect your Linux, Kubernetes, and virtualization strategy with SUSE solutions designed for flexibility across data centers, cloud, and edge environments.",
    actionLabel: "Explore Product",
    exploreLabel: "Explore",
    items: suseSolutions,
  },
  whyChoose: {
    heading: "Why Choose HawkStack for SUSE?",
    description: "Open technology. Practical expertise. Business focused delivery.",
    items: suseWhyChooseFeatures,
  },
  services: suseServicesContent,
  priorities: { heading: "Built Around Your Priorities", items: susePriorities },
  delivery: { eyebrow: "A clear path forward", heading: "Our Delivery Approach", steps: suseDeliverySteps },
  contact: suseContactContent,
};

type SuseTranslator = { raw(key: string): unknown; has(key: string): boolean };
const sharedFields = new Set(["href", "icon", "id", "variant", "number"]);

/** Merge locale copy with shared SUSE links, icons and structural data. */
function mergeCopy(base: unknown, copy: unknown, key = ""): unknown {
  if (sharedFields.has(key)) return base;
  if (typeof base === "string") return typeof copy === "string" ? copy : base;
  if (Array.isArray(base)) {
    return base.map((item, index) => mergeCopy(item, Array.isArray(copy) ? copy[index] : undefined));
  }
  if (base && typeof base === "object") {
    const translated = copy && typeof copy === "object" ? copy as Record<string, unknown> : {};
    return Object.fromEntries(Object.entries(base).map(([field, value]) => [
      field, mergeCopy(value, translated[field], field),
    ]));
  }
  return base;
}

/** Like Home, read structured content from next-intl and retain shared page data. */
export function getLocalizedSusePageData(t: SuseTranslator): SusePageData {
  return mergeCopy(susePageData, t.has("content") ? t.raw("content") : {}) as SusePageData;
}

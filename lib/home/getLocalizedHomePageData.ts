import { homePageData } from "@/data/home/home";
import { HomePageData } from "@/types/home/home";

type HomeTranslator = {
  (key: string): string;
  raw(key: string): unknown;
};

/** Combines locale-specific copy with the shared homepage media and links. */
export function getLocalizedHomePageData(t: HomeTranslator): HomePageData {
  const copy = t.raw("content") as Pick<
    HomePageData,
    | "heroSectionData"
    | "cloudServicesSectionData"
    | "productsSectionData"
    | "platformSectionData"
    | "whatWeDoSectionData"
    | "cloudSectionData"
  >;

  return {
    heroSectionData: {
      ...homePageData.heroSectionData,
      slides:
        copy.heroSectionData.slides ?? homePageData.heroSectionData.slides,
    },
    cloudServicesSectionData: {
      ...homePageData.cloudServicesSectionData,
      title: copy.cloudServicesSectionData.title,
      services: homePageData.cloudServicesSectionData.services.map(
        (service, index) => ({
          ...service,
          ...copy.cloudServicesSectionData.services?.[index],
        }),
      ),
    },
    productsSectionData: {
      ...homePageData.productsSectionData,
      ...copy.productsSectionData,
      products: homePageData.productsSectionData.products.map(
        (product, index) => ({
          ...product,
          ...copy.productsSectionData.products?.[index],
        }),
      ),
    },
    platformSectionData: {
      ...homePageData.platformSectionData,
      ...copy.platformSectionData,
      features: homePageData.platformSectionData.features.map(
        (feature, index) => ({
          ...feature,
          ...copy.platformSectionData.features?.[index],
        }),
      ),
    },
    whatWeDoSectionData: {
      ...homePageData.whatWeDoSectionData,
      ...copy.whatWeDoSectionData,
      cards: homePageData.whatWeDoSectionData.cards.map((card, index) => ({
        ...card,
        ...copy.whatWeDoSectionData.cards?.[index],
      })),
    },
    cloudSectionData: {
      ...homePageData.cloudSectionData,
      ...copy.cloudSectionData,
    },
  };
}

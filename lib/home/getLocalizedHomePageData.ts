import { homePageData } from "@/data/home/home";
import { HomePageData } from "@/types/home/home";

type HomeTranslator = {
  (key: string): string;
  raw(key: string): unknown;
};

/** Combines locale-specific copy with the shared homepage media and links. */
export function getLocalizedHomePageData(t: HomeTranslator): HomePageData {
  const copy = t.raw("content") as Partial<
    Pick<
      HomePageData,
      | "heroSectionData"
      | "cloudServicesSectionData"
      | "productsSectionData"
      | "digitalTransformationSectionData"
      | "platformSectionData"
      | "cloudSectionData"
    >
  >;

  const heroCopy = copy.heroSectionData;
  const cloudServicesCopy = copy.cloudServicesSectionData;
  const productsCopy = copy.productsSectionData;
  const digitalTransformationCopy = copy.digitalTransformationSectionData;
  const platformCopy = copy.platformSectionData;
  const cloudCopy = copy.cloudSectionData;

  return {
    heroSectionData: {
      ...homePageData.heroSectionData,
      ...heroCopy,
      primaryAction: {
        ...homePageData.heroSectionData.primaryAction,
        ...heroCopy?.primaryAction,
      },
      secondaryAction: {
        ...homePageData.heroSectionData.secondaryAction,
        ...heroCopy?.secondaryAction,
      },
      marketplace: {
        ...homePageData.heroSectionData.marketplace,
        ...heroCopy?.marketplace,
      },
      status: {
        ...homePageData.heroSectionData.status,
        ...heroCopy?.status,
      },
      services: homePageData.heroSectionData.services.map((service, index) => ({
        ...service,
        title: heroCopy?.services?.[index]?.title ?? service.title,
        description:
          heroCopy?.services?.[index]?.description ?? service.description,
      })),
    },
    cloudServicesSectionData: {
      ...homePageData.cloudServicesSectionData,
      intro:
        cloudServicesCopy?.intro ?? homePageData.cloudServicesSectionData.intro,
      actionLabel:
        cloudServicesCopy?.actionLabel ??
        homePageData.cloudServicesSectionData.actionLabel,
      title:
        cloudServicesCopy?.title ?? homePageData.cloudServicesSectionData.title,
      services: homePageData.cloudServicesSectionData.services.map(
        (service, index) => ({
          ...service,
          ...cloudServicesCopy?.services?.[index],
        }),
      ),
    },
    productsSectionData: {
      ...homePageData.productsSectionData,
      ...productsCopy,
      products: homePageData.productsSectionData.products.map(
        (product, index) => ({
          ...product,
          ...productsCopy?.products?.[index],
        }),
      ),
    },
    digitalTransformationSectionData: {
      ...homePageData.digitalTransformationSectionData,
      ...digitalTransformationCopy,
      highlights:
        digitalTransformationCopy?.highlights ??
        homePageData.digitalTransformationSectionData.highlights,
      services: homePageData.digitalTransformationSectionData.services.map(
        (service, index) => ({
          ...service,
          ...digitalTransformationCopy?.services?.[index],
        }),
      ),
      primaryPartners:
        homePageData.digitalTransformationSectionData.primaryPartners.map(
          (partner, index) => ({
            ...partner,
            ...digitalTransformationCopy?.primaryPartners?.[index],
          }),
        ),
      ecosystemPartners:
        homePageData.digitalTransformationSectionData.ecosystemPartners.map(
          (partner, index) => ({
            ...partner,
            ...digitalTransformationCopy?.ecosystemPartners?.[index],
          }),
        ),
    },
    platformSectionData: {
      ...homePageData.platformSectionData,
      ...platformCopy,
      features: homePageData.platformSectionData.features.map(
        (feature, index) => ({
          ...feature,
          ...platformCopy?.features?.[index],
        }),
      ),
    },
    cloudSectionData: {
      ...homePageData.cloudSectionData,
      ...cloudCopy,
    },
  };
}

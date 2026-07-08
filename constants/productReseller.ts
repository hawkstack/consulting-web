export const PRODUCT_TYPES = {
  AWS: "aws",
  CNCF: "cncf",
  MIRANTIS: "mirantis",
  REDHAT: "redhat",
} as const;

export type ProductType = (typeof PRODUCT_TYPES)[keyof typeof PRODUCT_TYPES];

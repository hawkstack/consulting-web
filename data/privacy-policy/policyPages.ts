import { cookiePolicyPage } from "./cookiePolicyPage";
import { privacyPolicyPage } from "./privacyPolicyPage";
import { termsOfUsePage } from "./termsOfUsePage";
import type { PolicyPageData } from "./types";

export type { PolicyHeader, PolicyPageData } from "./types";

export const policyPageFallbacks: Record<string, PolicyPageData> = {
  privacy: privacyPolicyPage,
  cookie: cookiePolicyPage,
  "terms-of-use": termsOfUsePage,
};

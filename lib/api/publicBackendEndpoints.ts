export const publicBackendPaths = {
  consultingForms: "/api/public/forms/consultingForms",
  jobs: "/api/public/jobs",
  jobApplication: "/api/public/jobs/job-application",
  consultingPrivacyPolicy:
    "/api/public/policy/TrainingPrivacyPolicy/ConsultingPrivacyPolicy",
  consultingCookiePolicy:
    "/api/public/policy/TrainingCookiePolicy/ConsultingCookiePolicy",
  consultingTermsOfUse:
    "/api/public/policy/TrainingTermsOfUse/ConsultingTermsOfUse",
} as const;

export function getPublicBackendUrl(
  path: (typeof publicBackendPaths)[keyof typeof publicBackendPaths],
) {
  const baseUrl =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API_BASE_URL is not configured.");
  }

  return `${baseUrl.replace(/\/+$/, "")}${path}`;
}

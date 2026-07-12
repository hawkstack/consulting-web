import { publicApiRoutes } from "@/lib/api/publicRoutes";

export function fetchPublicJobs() {
  return fetch(publicApiRoutes.jobs);
}

export function submitConsultingForm(payload: unknown) {
  return fetch(publicApiRoutes.consultingForms, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function submitJobApplication(payload: FormData) {
  return fetch(publicApiRoutes.jobApplication, {
    method: "POST",
    body: payload,
  });
}

export function fetchConsultingPrivacyPolicy() {
  return fetch(publicApiRoutes.consultingPrivacyPolicy, {
    cache: "no-store",
  });
}

export function fetchConsultingCookiePolicy() {
  return fetch(publicApiRoutes.consultingCookiePolicy, {
    cache: "no-store",
  });
}

export function fetchConsultingTermsOfUse() {
  return fetch(publicApiRoutes.consultingTermsOfUse, {
    cache: "no-store",
  });
}

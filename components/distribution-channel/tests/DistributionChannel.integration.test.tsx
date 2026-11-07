// Run: npm test -- --runInBand components/distribution-channel/tests
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import DistributionChannelPage from "@/app/distribution-channel/page";
import en from "@/messages/en.json";
import hi from "@/messages/hi.json";
import kn from "@/messages/kn.json";
import te from "@/messages/te.json";
import ar from "@/messages/ar.json";

const catalogs = { en, hi, kn, te, ar };

function leaves(value: unknown, prefix = ""): Record<string, string> {
  if (typeof value === "string") return { [prefix]: value };
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
      Object.entries(leaves(child, prefix ? `${prefix}.${key}` : key)),
    ),
  );
}

describe.each(Object.entries(catalogs))(
  "Distribution Channel (%s)",
  (locale, messages) => {
    const source = leaves(en.DistributionChannel);
    const translations = leaves(messages.DistributionChannel);

    it("has matching keys, complete translations and no English fallback copy", () => {
      expect(Object.keys(translations).sort()).toEqual(
        Object.keys(source).sort(),
      );
      for (const [key, value] of Object.entries(translations)) {
        expect(value.trim()).not.toBe("");
        if (locale !== "en") {
          expect(value).not.toBe(source[key]);
          expect(value.replace(/\{[^}]+\}/g, "")).not.toMatch(/[A-Za-z]/);
        }
      }
    });

    it("renders every translation with the selected locale and correct text direction", () => {
      const { container } = render(
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          onError={(error) => {
            throw error;
          }}
        >
          <DistributionChannelPage />
        </NextIntlClientProvider>,
      );

      for (const [key, value] of Object.entries(translations)) {
        if (key === "common.logoAlt") continue;
        expect(container.textContent).toContain(value);
      }
      for (const element of container.querySelectorAll(
        "h1, h2, h3, h4, p:not(.flex)",
      )) {
        expect(element).toHaveAttribute("dir", locale === "ar" ? "rtl" : "ltr");
      }
      for (const element of container.querySelectorAll("section, a, p.flex")) {
        expect(element).toHaveAttribute("dir", "ltr");
      }
      const logoTemplate = messages.DistributionChannel.common.logoAlt;
      expect(container.querySelector('img[src*="cncf"]')).toHaveAttribute(
        "alt",
        logoTemplate.replace(
          "{brand}",
          messages.DistributionChannel.common.brands.cncf,
        ),
      );
      for (const image of container.querySelectorAll("article img")) {
        const brand = image
          .closest("article")!
          .querySelector("h3")!.textContent!;
        expect(image).toHaveAttribute(
          "alt",
          logoTemplate.replace("{brand}", brand),
        );
      }
      if (locale !== "en") {
        expect(container.textContent).not.toMatch(/[A-Za-z]/);
        for (const image of container.querySelectorAll("img")) {
          expect(image.alt).not.toMatch(/[A-Za-z]/);
        }
        for (const [key, value] of Object.entries(source)) {
          if (key !== "common.logoAlt") {
            expect(container.textContent).not.toContain(value);
          }
        }
      }
    });
  },
);

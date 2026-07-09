import { render, screen } from "@testing-library/react";

import AzureHeroSection from "@/components/product-reseller/product-azure/components/AzureHeroSection";
import { azureHeroData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureHeroSection", () => {
  it("renders the Azure hero copy", () => {
    render(<AzureHeroSection data={azureHeroData} />);

    expect(screen.getByText(azureHeroData.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: `${azureHeroData.heading} ${azureHeroData.highlightedHeading} ${azureHeroData.headingSuffix}`,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(azureHeroData.description)).toBeInTheDocument();
  });

  it("renders the hero actions as links", () => {
    render(<AzureHeroSection data={azureHeroData} />);

    azureHeroData.buttons.forEach((button) => {
      const link = screen.getByRole("link", { name: button.label });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", button.href);
    });
  });

  it("renders the hero image with accessible alternative text", () => {
    render(<AzureHeroSection data={azureHeroData} />);

    expect(
      screen.getByRole("img", { name: azureHeroData.imageAlt }),
    ).toBeInTheDocument();
  });

  it("renders the features and trusted companies", () => {
    render(<AzureHeroSection data={azureHeroData} />);

    azureHeroData.features.forEach((feature) => {
      expect(screen.getByText(feature.label)).toBeInTheDocument();
    });

    expect(
      screen.getAllByText(azureHeroData.trustedLabel),
    ).toHaveLength(2);

    azureHeroData.trustedCompanies.forEach((company) => {
      expect(screen.getAllByText(company)).toHaveLength(2);
    });
  });
});

import { render, screen } from "@testing-library/react";

import AzureCompetenciesSection from "@/components/product-reseller/product-azure/components/AzureCompetenciesSection";
import { azureCompetenciesData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureCompetenciesSection", () => {
  it("renders the desktop and mobile section headings", () => {
    render(<AzureCompetenciesSection data={azureCompetenciesData} />);

    expect(
      screen.getByRole("heading", {
        name: azureCompetenciesData.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: azureCompetenciesData.mobileTitle,
      }),
    ).toBeInTheDocument();
  });

  it("renders the section description", () => {
    render(<AzureCompetenciesSection data={azureCompetenciesData} />);

    expect(screen.getByText(azureCompetenciesData.description)).toBeInTheDocument();
  });

  it("renders every competency card", () => {
    render(<AzureCompetenciesSection data={azureCompetenciesData} />);

    azureCompetenciesData.cards.forEach((card) => {
      expect(
        screen.getByRole("heading", {
          name: card.title,
        }),
      ).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
    });
  });
});

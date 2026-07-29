import { render, screen } from "@testing-library/react";

import AzureBlueprintOperationalSection from "@/components/product-reseller/product-azure/components/AzureBlueprintOperationalSection";
import { azureBlueprintOperationalData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureBlueprintOperationalSection", () => {
  it("renders the blueprint heading", () => {
    render(<AzureBlueprintOperationalSection data={azureBlueprintOperationalData} />);

    expect(
      screen.getByRole("heading", {
        name: azureBlueprintOperationalData.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders every blueprint step", () => {
    render(<AzureBlueprintOperationalSection data={azureBlueprintOperationalData} />);

    azureBlueprintOperationalData.steps.forEach((step) => {
      expect(screen.getByText(step.step)).toBeInTheDocument();
      expect(
        screen.getAllByRole("heading", {
          name: step.title,
        }).length,
      ).toBeGreaterThan(0);
      expect(screen.getByText(step.desktopDescription)).toBeInTheDocument();
      expect(screen.getByText(step.mobileDescription)).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";

import AzureEngineeringSection from "@/components/product-reseller/product-azure/components/AzureEngineeringSection";
import { azureEngineeringData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureEngineeringSection", () => {
  it("renders the desktop and mobile section headings", () => {
    render(<AzureEngineeringSection data={azureEngineeringData} />);

    expect(
      screen.getAllByRole("heading", {
        name: azureEngineeringData.title,
      }),
    ).toHaveLength(2);
  });

  it("renders every engineering capability", () => {
    render(<AzureEngineeringSection data={azureEngineeringData} />);

    azureEngineeringData.capabilities.forEach((capability) => {
      expect(
        screen.getByRole("heading", {
          name: capability.title,
        }),
      ).toBeInTheDocument();
      expect(screen.getByText(capability.description)).toBeInTheDocument();
    });
  });

  it("renders the engineering image with accessible alternative text", () => {
    render(<AzureEngineeringSection data={azureEngineeringData} />);

    expect(
      screen.getByRole("img", { name: azureEngineeringData.imageAlt }),
    ).toBeInTheDocument();
  });
});

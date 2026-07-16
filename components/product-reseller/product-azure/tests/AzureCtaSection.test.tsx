import { render, screen } from "@testing-library/react";

import AzureCtaSection from "@/components/product-reseller/product-azure/components/AzureCtaSection";
import { azureCtaData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureCtaSection", () => {
  it("renders the desktop and mobile CTA copy", () => {
    render(<AzureCtaSection data={azureCtaData} />);

    expect(
      screen.getByRole("heading", {
        name: azureCtaData.title,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(azureCtaData.description)).toBeInTheDocument();
    expect(screen.getByText(azureCtaData.mobileTitleStart)).toBeInTheDocument();
    expect(screen.getByText(azureCtaData.mobileTitleHighlight)).toBeInTheDocument();
    expect(screen.getByText(azureCtaData.mobileDescription)).toBeInTheDocument();
  });

  it("renders every CTA action as a link", () => {
    render(<AzureCtaSection data={azureCtaData} />);

    [
      azureCtaData.primaryAction,
      azureCtaData.secondaryAction,
      azureCtaData.mobileAction,
    ].forEach((action) => {
      expect(
        screen.getByRole("link", { name: action.label }),
      ).toHaveAttribute("href", action.href);
    });
  });
});

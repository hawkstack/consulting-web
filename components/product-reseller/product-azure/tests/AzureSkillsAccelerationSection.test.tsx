import { render, screen } from "@testing-library/react";

import AzureSkillsAccelerationSection from "@/components/product-reseller/product-azure/components/AzureSkillsAccelerationSection";
import { azureSkillsAccelerationData } from "@/components/product-reseller/product-azure/data/azure";

describe("AzureSkillsAccelerationSection", () => {
  it("renders the framework heading and description", () => {
    render(<AzureSkillsAccelerationSection data={azureSkillsAccelerationData} />);

    expect(
      screen.getByRole("heading", {
        name: azureSkillsAccelerationData.title,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(azureSkillsAccelerationData.description)).toBeInTheDocument();
  });

  it("renders every framework pillar", () => {
    render(<AzureSkillsAccelerationSection data={azureSkillsAccelerationData} />);

    azureSkillsAccelerationData.pillars.forEach((pillar) => {
      expect(screen.getByText(pillar.step)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          name: pillar.title,
        }),
      ).toBeInTheDocument();
      expect(screen.getByText(pillar.description)).toBeInTheDocument();
    });
  });
});

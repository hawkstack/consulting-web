import { screen, render } from "@testing-library/react";

import CapabilitiesSection from "@/components/services/app-modernization/components/CapabilitiesSection";

import { appModernizationCapabilitiesSectionContent as content } from "@/components/services/app-modernization/data/app-modernization";

describe("CapabilitiesSection", () => {
  it("renders the section as per the props content", () => {
    render(<CapabilitiesSection content={content} />);
    expect(screen.getByText(content.badge as string)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.title }),
    ).toBeInTheDocument();
  });

  it("renders all the cards content in the section ", () => {
    render(<CapabilitiesSection content={content} />);
    content.services.forEach((service) => {
      expect(
        screen.getAllByRole("heading", { name: service.title }).length,
      ).toBeGreaterThan(0);
      expect(screen.getAllByText(service.description).length).toBeGreaterThan(0);
    });
  });
});

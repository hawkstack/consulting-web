import { render, screen } from "@testing-library/react";

import WhyHawkStackSection from "@/components/services/app-modernization/components/WhyHawkStackSection";
import { appModernizationWhyHawkStackSectionContent as content } from "@/components/services/app-modernization/data/app-modernization";

describe("WhyHawkStackSection", () => {
  it("renders the section content from props", () => {
    render(<WhyHawkStackSection content={content} />);

    expect(screen.getByText(content.badge)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders all HawkStack modernization points", () => {
    render(<WhyHawkStackSection content={content} />);

    content.points.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });
});

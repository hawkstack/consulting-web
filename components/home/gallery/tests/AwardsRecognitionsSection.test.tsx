import { render, screen } from "@testing-library/react";

import AwardsRecognitionsSection from "@/components/home/gallery/components/AwardsRecognitionsSection";
import { awardsRecognitionsSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("AwardsRecognitionsSection", () => {
  it("renders the gallery hero copy", () => {
    render(<AwardsRecognitionsSection data={awardsRecognitionsSectionData} />);

    expect(
      screen.getByRole("heading", {
        name: `${awardsRecognitionsSectionData.title} ${awardsRecognitionsSectionData.highlightedTitle}`,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(awardsRecognitionsSectionData.description),
    ).toBeInTheDocument();
  });

  it("renders the gallery hero actions as links", () => {
    render(<AwardsRecognitionsSection data={awardsRecognitionsSectionData} />);

    awardsRecognitionsSectionData.actions.forEach((action) => {
      const link = screen.getByRole("link", { name: action.label });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", action.href);
    });
  });
});

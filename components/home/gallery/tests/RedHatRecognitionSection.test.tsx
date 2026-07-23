import { render, screen } from "@testing-library/react";

import RedHatRecognitionSection from "@/components/home/gallery/components/RedHatRecognitionSection";
import { redHatRecognitionSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("RedHatRecognitionSection", () => {
  it("renders the Red Hat recognition section copy", () => {
    render(<RedHatRecognitionSection data={redHatRecognitionSectionData} />);

    expect(screen.getByText(redHatRecognitionSectionData.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: redHatRecognitionSectionData.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(redHatRecognitionSectionData.description),
    ).toBeInTheDocument();
  });

  it("renders each Red Hat recognition card", () => {
    render(<RedHatRecognitionSection data={redHatRecognitionSectionData} />);

    redHatRecognitionSectionData.cards.forEach((card) => {
      expect(screen.getByText(card.badge)).toBeInTheDocument();
      expect(screen.getByText(card.category)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: card.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
    });
  });
});

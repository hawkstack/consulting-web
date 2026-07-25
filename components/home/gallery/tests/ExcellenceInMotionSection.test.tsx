import { render, screen } from "@testing-library/react";

import ExcellenceInMotionSection from "@/components/home/gallery/components/ExcellenceInMotionSection";
import { excellenceInMotionSectionData } from "@/components/home/gallery/data/awards-recognitions";

describe("ExcellenceInMotionSection", () => {
  it("renders the section with an accessible label", () => {
    render(<ExcellenceInMotionSection data={excellenceInMotionSectionData} />);

    expect(
      screen.getByRole("region", {
        name: excellenceInMotionSectionData.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders the section title", () => {
    render(<ExcellenceInMotionSection data={excellenceInMotionSectionData} />);

    expect(
      screen.getByRole("heading", {
        name: excellenceInMotionSectionData.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders each motion gallery image", () => {
    render(<ExcellenceInMotionSection data={excellenceInMotionSectionData} />);

    excellenceInMotionSectionData.images.forEach((image) => {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
    });
  });
});

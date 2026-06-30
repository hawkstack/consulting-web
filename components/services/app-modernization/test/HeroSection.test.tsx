import { render, screen } from "@testing-library/react";

import HeroSection from "@/components/services/app-modernization/components/HeroSection";
import { appModernizationHeroContent as content } from "@/components/services/app-modernization/data/app-modernization";

describe("HeroSection", () => {
  it("renders the hero copy from props", () => {
    render(<HeroSection content={content} />);

    expect(screen.getByText(content.badge as string)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: content.title })
    ).toBeInTheDocument();
    expect(screen.getByText(content.description)).toBeInTheDocument();
  });

  it("renders both hero call-to-action links", () => {
    render(<HeroSection content={content} />);

    content.buttons.forEach((button) => {
      const link = screen.getByRole("link", { name: button.label });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", button.href);
    });
  });

  it("renders the contact form content", () => {
    render(<HeroSection content={content} />);

    expect(
      screen.getByRole("heading", { name: content.form.title })
    ).toBeInTheDocument();

    content.form.fields.forEach((field) => {
      expect(screen.getByLabelText(`${field.label} *`)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(field.placeholder)).toBeInTheDocument();
    });

    expect(
      screen.getByRole("button", { name: content.form.submitLabel })
    ).toBeInTheDocument();
  });
});

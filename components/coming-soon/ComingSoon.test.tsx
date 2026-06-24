import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ComingSoon from "./ComingSoon";

describe("ComingSoon", () => {
  it("renders the coming soon page content", () => {
    render(<ComingSoon />);

    expect(screen.getByText("Work in progress")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /we're under construction/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /notify me/i })
    ).toBeInTheDocument();
  });

  it("allows users to type an email address", async () => {
    const user = userEvent.setup();

    render(<ComingSoon />);

    const emailInput = screen.getByPlaceholderText("Enter your email address");
    await user.type(emailInput, "user@example.com");

    expect(emailInput).toHaveValue("user@example.com");
  });
});

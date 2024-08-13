import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Full test of application", () => {
  it("should render header title", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Calculator");
  });
  it("should render github icon including link", () => {
    render(<App />);
    const headerIcon = screen.getByRole("link");
    expect(screen.getByRole("heading")).toContain(headerIcon);
  });
});

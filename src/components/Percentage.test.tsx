import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Percentage from "./Percentage";

describe("Percentage", () => {
  it("should calculate percentage of amount ", () => {
    render(<Percentage />);

    fireEvent.input(screen.getByTestId("percentage-percentage"), { target: { value: "10" } });
    fireEvent.input(screen.getByTestId("percentage-amount"), { target: { value: "100" } });
    fireEvent.click(screen.getByTestId("percentage-submit"));
    expect(screen.getByTestId("percentage-result")).toHaveTextContent("10");
  });
});

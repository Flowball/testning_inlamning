import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BMI from "./BMI";

describe("BMI", () => {
  it("should calculate BMI", () => {
    render(<BMI />);

    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "195" } });
    fireEvent.input(screen.getByTestId("bmi-weigth"), { target: { value: "95" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).toHaveTextContent("24.98");
  });
});

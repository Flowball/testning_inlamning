import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import BMI from "./components/BMI";
import Percentage from "./components/Percentage";

describe("Initial test for visual elements", () => {
  // HADE VELAT HA ETT TEST SOM TESTAR CONTEXT, KUNDE INTE LISTA UT HUR JAG GÖR DET!!!
  it("should render header title", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Calculator");
  });
  it("should render github icon including link", () => {
    render(<App />);
    expect(screen.getByTestId("header-icon")).toHaveAttribute(
      "href",
      "https://github.com/Flowball"
    );
  });
  it("should render navbar", () => {
    render(<App />);
    const navbarPercentage = screen.getByTestId("navbar-percentage");
    const navBarBMI = screen.getByTestId("navbar-percentage");
    expect(navbarPercentage).toBeVisible();
    expect(navBarBMI).toBeVisible();
  });

  it("should click navbar options to render components, updating context", () => {
    render(<App />);
    const navbarPercentage = screen.getByTestId("navbar-percentage");
    const navBarBMI = screen.getByTestId("navbar-bmi");

    fireEvent.click(navbarPercentage);
    expect(screen.getByTestId("percentage")).toBeVisible();
    fireEvent.click(navBarBMI);
    expect(screen.getByTestId("bmi")).toBeVisible();
  });
});

describe("Functional calculator  test - BMI", () => {
  it("should calculate BMI", () => {
    render(<BMI />);
    //for all different results
    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "200" } });
    fireEvent.input(screen.getByTestId("bmi-weight"), { target: { value: "20" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).toHaveTextContent("5");

    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "195" } });
    fireEvent.input(screen.getByTestId("bmi-weight"), { target: { value: "95" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).toHaveTextContent("24.98");

    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "20" } });
    fireEvent.input(screen.getByTestId("bmi-weight"), { target: { value: "300" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).toHaveTextContent("7500");

    // Kör igen för att verifiera
    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "185" } });
    fireEvent.input(screen.getByTestId("bmi-weight"), { target: { value: "95" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).not.toHaveTextContent("24.98");
  });
  it("should display last calculations", () => {
    //intergrations test, checkar data så det uppdateras i en annan komponent med.
    render(<BMI />);
    fireEvent.input(screen.getByTestId("bmi-length"), { target: { value: "195" } });
    fireEvent.input(screen.getByTestId("bmi-weight"), { target: { value: "95" } });
    fireEvent.click(screen.getByTestId("bmi-submit"));
    expect(screen.getByTestId("bmi-result")).toHaveTextContent("24.98");

    expect(screen.getByTestId("bmi-oldCalc")).toHaveTextContent("24.98");
  });
});

describe("Functional calculator test - Percentage", () => {
  it("should calculate percentage of amount ", () => {
    render(<Percentage />);

    fireEvent.input(screen.getByTestId("percentage-percentage"), { target: { value: "10" } });
    fireEvent.input(screen.getByTestId("percentage-amount"), { target: { value: "100" } });
    fireEvent.click(screen.getByTestId("percentage-submit"));
    expect(screen.getByTestId("percentage-result")).toHaveTextContent("10");
  });
});

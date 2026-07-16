import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the Home hub at /", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Lenon");
    expect(screen.getByText("Conheça meu trabalho")).toBeInTheDocument();
    expect(screen.getByText("Fale comigo")).toBeInTheDocument();
  });
});

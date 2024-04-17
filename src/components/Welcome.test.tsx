import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome.tsx";
import { expect, test } from "vitest";

test("Smoke Test", () => {
  render(<Welcome />);
});

it("greets with hello stranger when we don't pass a city", () => {
  render(<Welcome />);

  expect(screen.getByText(/hello stranger/i)).toBeVisible();
  expect(screen.getByText("hello stranger", { exact: false })).toBeVisible();

  screen.getByText(/hello stranger/i);
});

it("greets with the city name when you pass", () => {
  render(<Welcome city="Dresden" />);

  expect(screen.getByText(/dresden/i)).toBeVisible();
});

it("greets you as a stranger if the city name is an empty string", () => {
  render(<Welcome city="" />);

  expect(screen.getByText(/stranger/i)).toBeVisible();
});

it("greets you as a stranger if the city name is a string consisting of whitespacesa", () => {
  render(<Welcome city="  " />);

  expect(screen.getByText(/stranger/i)).toBeVisible();
});

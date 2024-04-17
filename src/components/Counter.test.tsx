import { beforeEach, describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter.tsx";
import { userEvent, UserEvent } from "@testing-library/user-event";

test("💨", () => {
  render(<Counter />);
});

async function clickIncrement(user: UserEvent) {
  await user.click(
    screen.getByRole("button", {
      name: /increment/i,
    }),
  );
}

describe("<Counter /> functionality tests", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("initializes the counter with zero", () => {
    expect(screen.getByText(/zähler steht bei 0/i)).toBeVisible();
  });

  test("clicking the button increments the counter to 1", async () => {
    const user = userEvent.setup();
    await clickIncrement(user);

    expect(screen.getByText(/zähler steht bei 1/i)).toBeVisible();
  });

  test("clicking the button twice increments the counter to 2", async () => {
    const user = userEvent.setup();
    await clickIncrement(user);
    await clickIncrement(user);

    expect(screen.getByText(/zähler steht bei 2/i)).toBeVisible();
  });
});

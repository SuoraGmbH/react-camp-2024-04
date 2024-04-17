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

  test.each([5, 15, 50])(
    "clicking the button %i times increments the counter to the amount of clicks we made",
    async (i) => {
      const user = userEvent.setup();

      for (let j = 0; j < i; j++) {
        await clickIncrement(user);
      }

      expect(
        screen.getByText(`zähler steht bei ${i}`, { exact: false }),
      ).toBeVisible();
    },
  );
});

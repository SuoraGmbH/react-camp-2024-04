import { expect, test, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimeEntryForm } from "./TimeEntryForm.tsx";
import { userEvent } from "@testing-library/user-event";
import TimeEntry from "../domain/TimeEntry.ts";

test("🚬", () => {
  render(<TimeEntryForm onAddTimeEntry={() => {}} />);
});

it("displays the text that I type in to the textfield", async () => {
  const user = userEvent.setup();
  render(<TimeEntryForm onAddTimeEntry={() => {}} />);

  const textbox = screen.getByRole("textbox", {
    name: /comment/i,
  });

  await user.type(textbox, "Hallo Welt");

  expect(screen.getByText(/hallo welt/i)).toBeVisible();
});

it("after submitting the form, the textfield should be empty again", async () => {
  const user = userEvent.setup();
  render(<TimeEntryForm onAddTimeEntry={() => {}} />);

  const textbox = screen.getByRole("textbox", {
    name: /comment/i,
  });

  await user.type(textbox, "Hallo Welt");
  await user.click(
    screen.getByRole("button", {
      name: /absenden/i,
    }),
  );

  expect(textbox).toHaveValue("");
});

it("submitting the form using enter also empties the textbox again", async () => {
  const user = userEvent.setup();
  render(<TimeEntryForm onAddTimeEntry={() => {}} />);

  const textbox = screen.getByRole("textbox", {
    name: /comment/i,
  });

  await user.type(textbox, "Hallo Welt{enter}");
  expect(textbox).toHaveValue("");
});

it("fires the addTimeEntry event after submitting the form", async () => {
  const user = userEvent.setup();
  const handleTimeEntryMock = vitest.fn();
  vitest.setSystemTime(new Date("2024-04-17 12:30:00"));
  render(<TimeEntryForm onAddTimeEntry={handleTimeEntryMock} />);

  const textbox = screen.getByRole("textbox", {
    name: /comment/i,
  });

  await user.type(textbox, "Hallo Welt{enter}");

  expect(handleTimeEntryMock).toHaveBeenCalledOnce();
  expect(handleTimeEntryMock.mock.calls[0][0].comment).toMatchInlineSnapshot(
    `"Hallo Welt"`,
  );
  expect(handleTimeEntryMock.mock.calls[0][0].id).toBeDefined();
  expect(handleTimeEntryMock.mock.calls[0][0].id).toBeTypeOf("string");
  expect(handleTimeEntryMock).toHaveBeenCalledWith(
    expect.objectContaining({
      comment: "Hallo Welt",
      start: new Date("2024-04-17 12:30:00"),
      end: new Date("2024-04-17 12:30:00"),
    } satisfies Omit<TimeEntry, "id">),
  );
});

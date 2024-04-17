import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimeEntryView } from "./TimeEntryView.tsx";
import TimeEntry from "../domain/TimeEntry.ts";

const normalTimeEntry: TimeEntry = {
  id: "5049f547-7498-4e2c-a535-29ae338428b9",
  start: new Date(),
  end: new Date(),
  comment: "This is just for tests",
};

const timeEntryWithId1: TimeEntry = {
  id: "1",
  start: new Date("2024-04-17 11:44:00"),
  end: new Date("2024-04-17 11:44:00"),
  comment: "This is for a special test case!",
};

test("🔥", () => {
  render(<TimeEntryView timeEntry={normalTimeEntry} />);
});

it("displays the comment of the given time entry", () => {
  render(<TimeEntryView timeEntry={normalTimeEntry} />);

  expect(screen.getByText(/This is just for tests/i)).toBeVisible();
});

it("does not display the date", () => {
  render(<TimeEntryView timeEntry={normalTimeEntry} />);
  expect(screen.queryByText(/\d{4}/)).toBeNull();
});

it("for id 1 it display the debug view", () => {
  const { container } = render(<TimeEntryView timeEntry={timeEntryWithId1} />);

  expect(container).toMatchSnapshot();
});

test("1+1 is 2", () => {
  expect(1 + 2).toMatchInlineSnapshot(`3`);
});

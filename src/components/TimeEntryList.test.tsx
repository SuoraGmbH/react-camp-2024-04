import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { TimeEntryList } from "./TimeEntryList.tsx";

test("🧯", () => {
  render(<TimeEntryList timeEntries={[]} />);
});

it("renders the given items", () => {
  const { container } = render(
    <TimeEntryList
      timeEntries={[
        {
          id: "5049f547-7498-4e2c-a535-29ae338428b9",
          start: new Date("2024-04-17 11:44:00"),
          end: new Date("2024-04-17 11:44:00"),
          comment: "This is just for tests",
        },

        {
          id: "5049f547-7498-4e2c-a535-29ae338428b5",
          start: new Date("2024-04-17 11:44:00"),
          end: new Date("2024-04-17 11:44:00"),
          comment: "This is the second time entry",
        },
      ]}
    />,
  );

  expect(container.textContent).toMatchInlineSnapshot(
    `"This is just for testsThis is the second time entry"`,
  );
});

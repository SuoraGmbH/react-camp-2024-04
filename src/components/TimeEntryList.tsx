import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import { TimeEntryView } from "./TimeEntryView.tsx";

export const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
    {
      id: "46262603-e773-450e-b58c-f04853576334",
      comment: "React lernen",
      start: new Date(),
      end: new Date(),
    },

    {
      id: "46262603-e773-450e-b58c-f04853576335",
      comment: "TypeScript lernen",
      start: new Date(),
      end: new Date(),
    },

    {
      id: "46262603-e773-450e-b58c-f04853576338",
      comment: "React Testing lernen",
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

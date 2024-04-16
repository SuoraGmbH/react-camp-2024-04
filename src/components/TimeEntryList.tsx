import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import { TimeEntryView } from "./TimeEntryView.tsx";

interface Props {
  timeEntries: readonly TimeEntry[];
}

export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
}) => {
  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView key={timeEntry.id} timeEntry={timeEntry} />
      ))}
    </div>
  );
};

import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  if (timeEntry.id !== "1") {
    return <div>{timeEntry.comment}</div>;
  }

  return <pre>{JSON.stringify(timeEntry, undefined, 2)}</pre>;
};

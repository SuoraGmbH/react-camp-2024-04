import React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  return <div>{timeEntry.comment}</div>;
};

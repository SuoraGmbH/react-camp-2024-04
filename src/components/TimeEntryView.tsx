import React, { useEffect } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  useEffect(() => {
    document.title = timeEntry.comment;
    // alert("Effekt wird ausgeführt");
  }, [timeEntry.comment]);
  // alert("Komponente rendert");

  return <div>{timeEntry.comment}</div>;
};

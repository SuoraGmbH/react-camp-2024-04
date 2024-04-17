import { TimeEntryList } from "./TimeEntryList.tsx";
import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

const useTimeEntriesFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then(setTimeEntries);
  }, []);

  return timeEntries;
};

export const TimeEntryListFromBackend = () => {
  const timeEntries = useTimeEntriesFromBackend();

  if (timeEntries === undefined) {
    return <div>Löading</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

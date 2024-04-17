import { TimeEntryList } from "./TimeEntryList.tsx";
import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

export const TimeEntryListFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data) => setTimeEntries(data));
  }, []);

  return <TimeEntryList timeEntries={timeEntries} />;
};

import { TimeEntryList } from "./TimeEntryList.tsx";
import { useEffect, useState } from "react";

export const TimeEntryListFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data) => setTimeEntries(data));
  }, []);

  return <TimeEntryList timeEntries={timeEntries} />;
};

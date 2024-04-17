import { TimeEntryList } from "./TimeEntryList.tsx";
import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

const useFetchData = function <ResponseData>(url: string) {
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [url]);

  return data;
};

const useTimeEntriesFromBackend = () => {
  return useFetchData<TimeEntry[]>("http://localhost:3001/timeEntries");
};

export const TimeEntryListFromBackend = () => {
  const timeEntries = useTimeEntriesFromBackend();
  const timeEntry = useFetchData<TimeEntry>(
    "http://localhost:3001/timeEntries/2022-01-10T13:59:24.082Z",
  );

  if (timeEntries === undefined) {
    return <div>Löading</div>;
  }

  return (
    <>
      <TimeEntryList timeEntries={timeEntries} />
      <pre>{JSON.stringify(timeEntry, undefined, 2)}</pre>
    </>
  );
};

import { TimeEntryList } from "./TimeEntryList.tsx";
import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

const usePromiseData = function <PromiseData>(promise: () => Promise<any>) {
  const [data, setData] = useState<PromiseData>();

  useEffect(() => {
    promise().then(setData);
  }, [promise]);

  return data;
};

const useFetchData = function <ResponseData>(url: string) {
  const data = usePromiseData<ResponseData>(async () => {
    return fetch(url).then((response) => response.json());
  });

  return data;
};

const useTimeEntriesFromBackend = () => {
  return useFetchData<TimeEntry[]>("http://localhost:3001/timeEntries");
};

export const TimeEntryListFromBackend = () => {
  const timeEntries = useTimeEntriesFromBackend();

  if (timeEntries === undefined) {
    return <div>Löading</div>;
  }

  return (
    <>
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
};

import React from "react";
import { useQuery } from "@tanstack/react-query";

export const TimeEntryListTanstackQuery: React.FunctionComponent = () => {
  const { data } = useQuery({
    queryKey: ["timeEntries", "all"],
    queryFn: () => {
      return fetch("http://localhost:3001/timeEntries").then((response) =>
        response.json(),
      );
    },
  });

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchTimeEntries = async () => {
  const response = await fetch("http://localhost:3001/timeEntries");

  return response.json();
};

export const TimeEntryListTanstackQuery: React.FunctionComponent = () => {
  const { data, error, isError, refetch } = useQuery({
    queryKey: ["timeEntries", "all"],
    queryFn: fetchTimeEntries,

    refetchInterval: 3_000,
  });

  return (
    <pre>
      <button onClick={() => refetch()}>🚨</button>
      {JSON.stringify(data, undefined, 2)}

      {JSON.stringify({ error, isError }, undefined, 2)}
    </pre>
  );
};

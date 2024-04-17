import { TimeEntryListFromBackend } from "./components/TimeEntryListFromBackend.tsx";
import { TimeEntryListTanstackQuery } from "./components/TimeEntryListTanstackQuery.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 30_000,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/*<TimeEntryListFromBackend />*/}
      <hr />
      <TimeEntryListTanstackQuery />
      <TimeEntryListTanstackQuery />
      <TimeEntryListTanstackQuery />
      <TimeEntryListTanstackQuery />
      <TimeEntryListTanstackQuery />
    </QueryClientProvider>
  );
}

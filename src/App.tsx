import { Welcome } from "./components/Welcome";
import { TimeEntryView } from "./components/TimeEntryView.tsx";
import TimeEntry from "./domain/TimeEntry.ts";
import { TimeEntryForm } from "./components/TimeEntryForm.tsx";
import { Counter } from "./components/Counter.tsx";
import { GithubRepoStats } from "./components/GithubRepoStats.tsx";
import { TimeEntryList } from "./components/TimeEntryList.tsx";

export function App() {
  return (
    <>
      <TimeEntryList />
      <TimeEntryForm onAddEntry={(timeEntry: TimeEntry) => {}} />
      <hr />
      <GithubRepoStats />
      <Counter />
      <Counter />
      <Welcome city="Oer-Erkenschwick" />
      <Welcome city="München" />
      <Welcome />
    </>
  );
}

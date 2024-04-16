import { Welcome } from "./components/Welcome";
import { TimeEntryView } from "./components/TimeEntryView.tsx";
import TimeEntry from "./domain/TimeEntry.ts";
import { TimeEntryForm } from "./components/TimeEntryForm.tsx";
import { Counter } from "./components/Counter.tsx";
import { GithubRepoStats } from "./components/GithubRepoStats.tsx";

export function App() {
  const timeEntry: TimeEntry = {
    id: "1eff91b1-e134-493c-8b84-3c09745fef71",
    comment: "React lernen",
    start: new Date(),
    end: new Date(),
  };

  return (
    <>
      <GithubRepoStats />
      <Counter />
      <Counter />
      <hr />
      <Welcome city="Oer-Erkenschwick" />
      <Welcome city="München" />
      <Welcome />
      <TimeEntryView timeEntry={timeEntry} />
      <TimeEntryForm />
    </>
  );
}

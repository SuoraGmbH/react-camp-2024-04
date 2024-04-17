import { Welcome } from "./components/Welcome";
import TimeEntry from "./domain/TimeEntry.ts";
import { TimeEntryForm } from "./components/TimeEntryForm.tsx";
import { Counter } from "./components/Counter.tsx";
import { GithubRepoStats } from "./components/GithubRepoStats.tsx";
import { TimeEntryList } from "./components/TimeEntryList.tsx";
import { useState } from "react";

export function App() {
  const initialTimeEntries: TimeEntry[] = [
    {
      id: "46262603-e773-450e-b58c-f04853576334",
      comment: "React lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "46262603-e773-450e-b58c-f04853576335",
      comment: "TypeScript lernen",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "46262603-e773-450e-b58c-f04853576338",
      comment: "React Testing lernen",
      start: new Date(),
      end: new Date(),
    },
  ];

  const [timeEntries, setTimeEntries] =
    useState<readonly TimeEntry[]>(initialTimeEntries);

  return (
    <>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm
        onAddTimeEntry={(timeEntry: TimeEntry) => {
          setTimeEntries((prevTimeEntries) => {
            return [...prevTimeEntries, timeEntry];
          });
        }}
      />
      <hr />
      <TimeEntryListTanstackQuery />
      {/*<Blabla />*/}
      {/*<TimeEntryList timeEntries={timeEntries} />*/}
      {/*<TimeEntryForm*/}
      {/*  onAddTimeEntry={(timeEntry: TimeEntry) => {*/}
      {/*    setTimeEntries((prevTimeEntries) => {*/}
      {/*      return [...prevTimeEntries, timeEntry];*/}
      {/*    });*/}
      {/*  }}*/}
      {/*/>*/}
      <hr />
      {/*<GithubRepoStats />*/}
      {/*<Counter />*/}
      {/*<Counter />*/}
      {/*<Welcome city="Oer-Erkenschwick" />*/}
      {/*<Welcome city="München" />*/}
      {/*<Welcome />*/}
  );
}

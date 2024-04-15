import { Welcome } from "./components/Welcome";
import { TimeEntryView } from "./components/TimeEntryView.tsx";

export function App() {
  return (
    <div>
      <Welcome city="Oer-Erkenschwick" />
      <Welcome city="München" />
      <Welcome />
      <TimeEntryView comment="München ist schön!" />
    </div>
  );
}

import { Welcome } from "./components/Welcome";

export function App() {
  return (
    <div>
      <Welcome city="Oer-Erkenschwick" />
      <Welcome city="München" />
      <Welcome />
      {Welcome({ city: "Mainz" })}
      Hallo Christian 👋
    </div>
  );
}

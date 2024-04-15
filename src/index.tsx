import ReactDOM from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");

if (container === null) {
  alert("Mir fehlt der container 😿");
} else {
  ReactDOM.createRoot(container).render(<App />);
}

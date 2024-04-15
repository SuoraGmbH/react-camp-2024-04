import ReactDOM from "react-dom/client";

const element = <h1>Hallo "Muenchen"</h1>;

const container = document.getElementById("root");

if (container === null) {
  alert("Mir fehlt der container 😿");
} else {
  ReactDOM.createRoot(container).render(element);
}

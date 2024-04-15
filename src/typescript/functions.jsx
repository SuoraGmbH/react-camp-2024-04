const Welcome = ({ city }) => <h1>Hello {city}</h1>;

// Destructuring über eine zweite ebene
const Welcome2 = ({ city: { name }, user }) => (
  <div>
    <h1>Hello {name}</h1>
    <h2>Hallo {user.name}</h2>
  </div>
);

// Bitte niemals react-Komponenten so aufrufen!
Welcome2({ city: { name: "Dresden" }, user: { name: "Jan" } });

function iHateJavascript() {
  console.log(this);
}

class User {
  name = "";
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(this.name);
  }
}

const jan = new User("Jan");
jan.sayHello(); // Jan
const philipp = new User("Philipp");
philipp.sayHello(); // Philipp
philipp.sayHello = philipp.sayHello.bind(jan);
philipp.sayHello(); // Jan
const markus = { name: "Markus" };
philipp.sayHello = philipp.sayHello.bind(markus);
philipp.sayHello(); // Immer noch Jan, weill sayHello ja bereits an Jan gebindet war
philipp.sayHello = jan.sayHello.bind(markus);
// philipp.sayHello = User.prototype.sayHello.bind(markus); // alternativ geht auch das hier
philipp.sayHello(); // Markus
jan.sayHello(); // Immer noch Jan, weil wir die funktion von Jan nicht verändert haben

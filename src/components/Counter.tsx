import React, { useState } from "react";

export const Counter: React.FunctionComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <div>
      <input
        type="number"
        value={incrementBy}
        onChange={(event) => setIncrementBy(Number(event.target.value))}
      />
      <button
        onClick={() => {
          // Lange schreibweise des gleichen codes, der unten drunter steht
          // setCount(function (prevCount) {
          //   return prevCount + 1;
          // });

          setCount((prevCount) => prevCount + incrementBy);
        }}
      >
        Increment
      </button>
      <p>Zähler steht bei {count}</p>
    </div>
  );
};

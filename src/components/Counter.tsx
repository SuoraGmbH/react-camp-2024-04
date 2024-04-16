import React, { useState } from "react";

export const Counter: React.FunctionComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>Zähler steht bei {count}</p>
    </div>
  );
};

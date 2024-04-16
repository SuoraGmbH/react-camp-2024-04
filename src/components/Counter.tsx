import React, { useState } from "react";

export const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <p>Zähler steht bei {count}</p>
    </div>
  );
};

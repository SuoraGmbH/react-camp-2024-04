import React, { useState } from "react";

export const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setInputValue("");
        console.log("Hello World");
      }}
    >
      <input
        name="comment"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};

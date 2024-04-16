import React, { useId, useState } from "react";

export const TimeEntryForm: React.FunctionComponent = () => {
  const inputId = useId();
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setInputValue("");
        console.log("Hello World");
      }}
    >
      <label htmlFor={inputId}>Comment</label>
      <input
        id={inputId}
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

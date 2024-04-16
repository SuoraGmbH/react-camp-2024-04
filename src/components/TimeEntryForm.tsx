import React, { useState } from "react";

export const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  // Diese Typings sind eigentlich doppelt - eins von beidem würde reichen
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="comment"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};

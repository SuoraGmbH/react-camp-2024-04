import React, { useId, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  onAddTimeEntry: (timeEntry: TimeEntry) => void;
}

export const TimeEntryForm: React.FunctionComponent<Props> = ({
  onAddTimeEntry,
}) => {
  const inputId = useId();
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        onAddTimeEntry({
          id: crypto.randomUUID(),
          comment: inputValue,
          start: new Date(),
          end: new Date(),
        });
        console.log({ inputValue });
        event.preventDefault();
        setInputValue("");
        console.log("Hello World");
      }}
    >
      <label htmlFor={inputId}>Comment</label>
      <input
        id={inputId}
        value={inputValue}
        placeholder="kommentaaar"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />

      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};

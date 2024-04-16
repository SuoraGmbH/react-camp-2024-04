import React from "react";

export const TimeEntryForm: React.FunctionComponent = () => {
  // Diese Typings sind eigentlich doppelt - eins von beidem würde reichen
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="comment" />
      <button type="submit">Absenden</button>
    </form>
  );
};

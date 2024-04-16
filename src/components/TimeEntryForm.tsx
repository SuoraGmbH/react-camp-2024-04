import React from "react";

export const TimeEntryForm: React.FunctionComponent = () => {
  // Diese Typings sind eigentlich doppelt - eins von beidem würde reichen
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    console.log("Hello World");

    console.log(event.target); // Zugriff auf das <form> element
    const formData = new FormData(event.target);
    console.log(formData.get("comment"));

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="comment" />
      <button type="submit">Absenden</button>
    </form>
  );
};

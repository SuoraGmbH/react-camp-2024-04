import React from "react";

interface Props {
  city?: string;
}

export const Welcome: React.FunctionComponent<Props> = ({ city }) => {
  if (!city || city.trim() === "") {
    return <h1>Hello stranger</h1>;
  }

  return <h1>Hello {city?.toUpperCase()}</h1>;
};

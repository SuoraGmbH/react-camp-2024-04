import React from "react";

interface Props {
  city: string;
}

export const Welcome: React.FunctionComponent<Props> = ({ city }) => {
  return <h1>Hello {city}</h1>;
};

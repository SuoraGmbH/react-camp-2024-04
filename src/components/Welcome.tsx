import React from "react";

interface Props {
  city: string;
}

export const Welcome: React.FunctionComponent<Props> = ({ city }) => {
  const upperCaseCity = city.toUpperCase();
  return (
    <h1>
      Hello {city} {upperCaseCity}
    </h1>
  );
};

import React from "react";

interface Props {
  comment: string;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({ comment }) => {
  return <div>{comment}</div>;
};

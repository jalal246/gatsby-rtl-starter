import React from "react";
import { colors } from "theme";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const TimeLabel = ({ children, ...rest }) => {
  return (
    <span css={{ color: colors.subtle }}>
      <time {...rest}>
        {new Date(children).toLocaleDateString("ar", options)}
      </time>
    </span>
  );
};

export default TimeLabel;

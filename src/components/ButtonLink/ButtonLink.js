import { Link } from "gatsby";
import React from "react";
import { colors } from "theme";

const style = {
  display: "inline-block",
  fontSize: 16,
};

// const primaryStyle = {
//   backgroundColor: colors.brand,
//   color: colors.black,
//   padding: "10px 25px",
//   whiteSpace: "nowrap",
//   transition: "background-color 0.2s ease-out",
// };

// const secondaryStyle = {
//   color: colors.brand,
//   transition: "color 0.2s ease-out",
// };

const ButtonLink = ({ children, isPrimary, ...rest }) => {
  return (
    <Link css={[style]} {...rest}>
      {children}
    </Link>
  );
};

export default ButtonLink;

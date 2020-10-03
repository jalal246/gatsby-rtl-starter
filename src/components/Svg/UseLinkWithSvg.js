import React from "react";
import { colors } from "theme";
import UseSvg from "./UseSvg";

const iconStyle = {
  padding: "5px 10px",
  marginLeft: 10,
  whiteSpace: "nowrap",
  opacity: "95%",
  color: "inherit",
  textDecoration: "none",
  ":hover": {
    color: colors.logo,
  },

  ":focus": {
    outline: 0,
    backgroundColor: colors.light,
    borderRadius: 15,
  },
};

const UseLinkWithSvg = ({ svgTitle, svgPath, svgViewBox, href, ...rest }) => {
  return (
    <a css={iconStyle} href={href} rel="noopener">
      <UseSvg title={svgTitle} viewBox={svgViewBox} path={svgPath} {...rest} />
    </a>
  );
};

export default UseLinkWithSvg;

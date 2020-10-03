import { Link } from "gatsby";
import React from "react";
import { colors } from "theme";
import Flex from "../Flex";

const style = {
  color: colors.white,
  transition: "color 0.2s ease-out",
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,

  fontSize: 18,

  ":focus": {
    outline: 0,
    backgroundColor: colors.light,
    color: colors.white,
  },
};

const HeaderMenuLink = ({ name, to }) => {
  return (
    <Flex Component={Link} vAlign="center" css={style} to={to}>
      {name}
    </Flex>
  );
};

export default HeaderMenuLink;

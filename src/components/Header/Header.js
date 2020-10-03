import React from "react";
import { colors } from "theme";
import Flex from "../Flex";

const Header = ({ fontSize, children }) => {
  return (
    <Flex Component="header" hAlign="space-between" vAlign="baseline">
      <h1
        css={[
          { fontSize },
          {
            color: colors.dark,
            marginBottom: 0,
            lineHeight: "65px",
            fontWeight: 700,
          },
        ]}
      >
        {children}
      </h1>
    </Flex>
  );
};

export default Header;

import React from "react";

function Flex({
  Component = "div",
  direction = "row",
  grow = 0,
  shrink = 1,
  basis = "auto",
  hAlign = "flex-start",
  vAlign = "flex-start",
  children,
  ...rest
}) {
  return (
    <Component
      css={{
        display: "flex",
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        justifyContent: direction === "row" ? hAlign : vAlign,
        alignItems: direction === "row" ? vAlign : hAlign,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Flex;

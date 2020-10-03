import React from "react";
import Flex from "../Flex";
import HeaderMenuLink from "./HeaderMenuLink";

const style = {
  flex: "1",
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  height: "100%",
  opacity: "95%",

  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
};

const HeaderMenu = ({ menuItems }) => {
  return (
    <Flex Component="nav" vAlign="stretch" css={style}>
      {menuItems.map(({ name, to }) => (
        <HeaderMenuLink key={name} name={name} to={to} />
      ))}
    </Flex>
  );
};

export default HeaderMenu;

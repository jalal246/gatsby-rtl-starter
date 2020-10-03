import React from "react";
import Flex from "../Flex";
import Header from "../LayoutHeader";

const Layout = ({ children, location }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 40px)",
      }}
    >
      <Header location={location} />
      <Flex
        direction="column"
        shrink="0"
        grow="1"
        vAlign="stretch"
        css={{
          flex: "1 0 auto",

          marginTop: 50,
        }}
      >
        {children}
      </Flex>
    </div>
  );
};

export default Layout;

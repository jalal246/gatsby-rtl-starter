import React from "react";
import Author from "../Author";

import Flex from "../../../components/Flex";

const Sidebar = ({ pageIndex }) => {
  return (
    <Flex
      Component="section"
      direction="row"
      hAlign="center"
      grow={1}
      css={{
        flex: "1 0 auto",
        transition: "opacity 1.5s ease",

        WebkitOverflowScrolling: "touch",
        opacity: "95%",
        paddingTop: 60,

        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "::-webkit-scrollbar": {
          display: "none",
        },

        width: null,

        "@media print": {
          display: "none",
        },
      }}
    >
      {pageIndex === 0 ? <Author /> : null}
    </Flex>
  );
};

export default Sidebar;

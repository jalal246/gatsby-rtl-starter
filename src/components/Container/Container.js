import React from "react";

const Container = ({ children }) => {
  return (
    <div
      css={{
        paddingLeft: 20,
        paddingRight: 20,

        marginLeft: "auto",
        marginRight: "auto",

        width: "90%",
      }}
    >
      {children}
    </div>
  );
};

export default Container;

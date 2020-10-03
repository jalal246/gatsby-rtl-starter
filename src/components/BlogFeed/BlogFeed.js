import React from "react";
import HeaderAndTime from "../HeaderAndTime";

const BlogFeed = ({ title, description, slug, date }) => {
  return (
    <div css={{ marginBottom: 1.25, "&:last-child": 0.5 }}>
      <HeaderAndTime slug={slug} title={title} date={date} />

      <div
        css={{
          marginTop: 30,
          fontSize: 17,
          lineHeight: 1.7,
          maxWidth: "42em",

          "&:first-of-type": {
            marginTop: 15,
          },
        }}
      >
        {description}
      </div>
      <span css={{ margin: "0 5px" }} />
    </div>
  );
};

export default BlogFeed;

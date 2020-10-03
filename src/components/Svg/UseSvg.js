import React from "react";

const UseSvg = ({
  title,
  alt = title,
  width = 17,
  height = 17,
  viewBox,
  path,
  cssProps = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      alt={alt}
      x="0px"
      y="0px"
      viewBox={viewBox}
      width={width}
      height={height}
      css={cssProps}
    >
      <title>{title}</title>
      <path fill="currentColor" d={path} />
    </svg>
  );
};

export default UseSvg;

import React from "react";
import Flex from "../Flex";

import { UseLinkWithSvg, ICONS } from "../Svg";

const HeaderSocial = ({ contactsInfo }) => {
  return (
    <Flex hAlign="center" vAlign="flex-end" css={{ width: "auto" }}>
      {contactsInfo.map(({ name, link }) => {
        const { path, viewBox } = ICONS[name];

        return (
          <UseLinkWithSvg
            key={name}
            svgTitle={name}
            svgPath={path}
            svgViewBox={viewBox}
            href={link}
            width={17}
            height={17}
          />
        );
      })}
    </Flex>
  );
};

export default HeaderSocial;

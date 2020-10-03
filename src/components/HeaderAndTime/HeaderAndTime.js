import { Link } from "gatsby";
import React from "react";
import Flex from "../Flex";
import Header from "../Header";
import TimeLabel from "../TimeLabel";

const HeaderAndTime = ({ isMain = false, slug, title, date }) => {
  return (
    <Flex Component="span" direction="column" vAlign="space-between">
      {isMain ? (
        <Header fontSize={60}>{title}</Header>
      ) : (
        <Link to={slug}>
          <Header fontSize={40}>{title}</Header>
        </Link>
      )}
      {date && (
        <Link css={{ marginTop: isMain ? 30 : 9 }} to={slug}>
          <TimeLabel>{date}</TimeLabel>
        </Link>
      )}
    </Flex>
  );
};

export default HeaderAndTime;

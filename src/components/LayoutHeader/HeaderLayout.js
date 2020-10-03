import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { colors } from "theme";
import Container from "../Container";
import HeaderMenu from "./HeaderMenu";
import HeaderSocial from "./HeaderSocial";
import Flex from "../Flex";

const LayoutHeader = ({ location }) => {
  const {
    site: {
      siteMetadata: {
        HEADER_MENU,
        author: { contacts },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            contacts {
              name
              link
            }
          }
          HEADER_MENU {
            name
            to
          }
        }
      }
    }
  `);

  return (
    <header
      css={{
        backgroundColor: colors.dark,
        color: colors.white,
        position: "fixed",
        zIndex: 1,
        width: "100%",
        top: 0,
        left: 0,
        "@media print": {
          display: "none",
        },
      }}
    >
      <Container>
        <Flex
          vAlign="center"
          css={{
            height: 60,
          }}
        >
          <HeaderMenu menuItems={HEADER_MENU} location={location} />
          <HeaderSocial contactsInfo={contacts} />
        </Flex>
      </Container>
    </header>
  );
};

export default LayoutHeader;

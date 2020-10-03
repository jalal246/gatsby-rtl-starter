import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
// import createCanonicalUrl from "../../../utils/createCanonicalUrl";
import Image from "gatsby-image";
import Flex from "../../../components/Flex";

/* cspell: disable-next-line */
const altText = "صورة للمؤلف";

const Author = () => {
  const {
    avatar,
    site: {
      siteMetadata: {
        author: { name, bio },
      },
    },
  } = useStaticQuery(graphql`
    query {
      avatar: file(
        absolutePath: { regex: "/content/assets/gatsby-icon.png/" }
      ) {
        extension
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      site {
        siteMetadata {
          author {
            name
            bio
          }
        }
      }
    }
  `);

  return (
    <Flex vAlign="center">
      <Link to="/">
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={`${altText} ${name}`}
          css={{
            minWidth: 50,
            borderRadius: `50%`,
          }}
        />
      </Link>
      <div css={{ paddingBottom: 30, paddingRight: 8 }}>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    </Flex>
  );
};

export default Author;

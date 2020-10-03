/* eslint-disable react/no-array-index-key */
import { graphql } from "gatsby";
import React from "react";

import TitleAndMeta from "../components/TitleAndMeta";
import Layout from "../components/Layout";
import BlogFeed from "../components/BlogFeed";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Pagination from "../components/Pagination";
import Sidebar from "./components/Sidebar";
import createCanonicalUrl from "../utils/createCanonicalUrl";

const FeedAndPagination = ({ edges, pageContext }) => {
  return (
    <Container>
      <Flex direction="column" vAlign="stretch" grow="1" shrink="1">
        <div css={{ flex: "1 0 auto" }}>
          {edges.map(
            (
              {
                node: {
                  description,
                  title,
                  createdAt: date,
                  fields: { slug },
                },
              },
              index
            ) => {
              return (
                <BlogFeed
                  title={title}
                  description={description}
                  slug={slug}
                  date={date}
                  key={index}
                />
              );
            }
          )}
          <Pagination {...pageContext} />
        </div>
      </Flex>
    </Container>
  );
};

const FeedPage = ({
  location,
  data,
  pageContext: { slug, ...restOfPageContext },
}) => {
  const {
    allStrapiBlog: { edges },
  } = data;

  const pageIndex = restOfPageContext.currentPage;

  return (
    <Layout location={location}>
      <TitleAndMeta
        url={createCanonicalUrl(slug)}
        title={pageIndex === 0 ? null : `الصفحة ${pageIndex}`}
      />
      <Flex
        vAlign="stretch"
        grow={1}
        css={{
          width: "fill-available",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <div css={{ flex: 3 }}>
          <FeedAndPagination edges={edges} pageContext={restOfPageContext} />
        </div>
        <Sidebar pageIndex={pageIndex} />
      </Flex>
    </Layout>
  );
};

export const query = graphql`
  query TemplateFeed($postsLimit: Int!, $postsOffset: Int!) {
    allStrapiBlog(
      limit: $postsLimit
      skip: $postsOffset
      sort: { order: DESC, fields: [createdAt] }
    ) {
      edges {
        node {
          title
          description
          createdAt(formatString: "MMMM DD, YYYY")
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default FeedPage;

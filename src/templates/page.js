import { graphql } from "gatsby";
import React from "react";

import MarkdownPageWithLayout from "../components/MarkdownPageWithLayout";

const Page = ({ location, data }) => {
  const {
    strapiSiteMeta: {
      content: html,
      title,
      excerpt,
      fields: { slug },
    },
  } = data;

  return (
    <MarkdownPageWithLayout
      location={location}
      data={{ html, title, excerpt, slug }}
    />
  );
};

export const pageQuery = graphql`
  query TemplatePageMarkdown($slug: String!) {
    strapiSiteMeta(fields: { slug: { eq: $slug } }) {
      content
      #excerpt(pruneLength: 500)
      title
      fields {
        slug
      }
    }
  }
`;

export default Page;

import { graphql } from "gatsby";
import React from "react";

import MarkdownPageWithLayout from "../components/MarkdownPageWithLayout";

const Page = ({ location, data }) => {
  const {
    strapiSiteMeta: {
      content: html,
      title,
      fields: { slug },
    },
  } = data;

  return (
    <MarkdownPageWithLayout location={location} data={{ html, title, slug }} />
  );
};

export const pageQuery = graphql`
  query TemplatePageMarkdown($slug: String!) {
    strapiSiteMeta(fields: { slug: { eq: $slug } }) {
      content
      title
      fields {
        slug
      }
    }
  }
`;

export default Page;

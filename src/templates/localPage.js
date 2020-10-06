import { graphql } from "gatsby";
import React from "react";

import MarkdownPageWithLayout from "../components/MarkdownPageWithLayout";

const Page = ({ location, data }) => {
  const {
    markdownRemark: {
      html,
      excerpt,
      frontmatter: { title },
      fields: { slug },
    },
  } = data;

  return (
    <MarkdownPageWithLayout
      location={location}
      data={{ html, title, description: excerpt, slug }}
    />
  );
};

export const pageQuery = graphql`
  query TemplateLocalPageMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
      excerpt
      html
    }
  }
`;

export default Page;

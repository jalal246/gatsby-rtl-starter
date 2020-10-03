import { graphql } from "gatsby";
import React from "react";

import MarkdownPageWithLayout from "../components/MarkdownPageWithLayout";

const Blog = ({ location, data }) => {
  const {
    strapiBlog: {
      content: html,
      title,
      description,
      createdAt: date,
      fields: { slug },
    },
  } = data;

  return (
    <MarkdownPageWithLayout
      location={location}
      data={{ html, title, description, slug, date }}
    />
  );
};

export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String!) {
    strapiBlog(fields: { slug: { eq: $slug } }) {
      content
      description
      title
      createdAt(formatString: "MMMM DD, YYYY")
      fields {
        slug
      }
    }
  }
`;

export default Blog;

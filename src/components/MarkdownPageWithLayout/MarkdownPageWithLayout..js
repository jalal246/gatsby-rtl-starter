import React from "react";

import Layout from "../Layout";
import MarkdownPage from "../MarkdownPage";

const MarkdownPageWithLayout = ({ location, data }) => {
  const { html, title, description, excerpt, date, slug } = data;

  return (
    <Layout location={location}>
      <MarkdownPage
        location={location}
        slug={slug}
        date={date}
        title={title}
        description={description || excerpt}
        html={html}
      />
    </Layout>
  );
};

export default MarkdownPageWithLayout;

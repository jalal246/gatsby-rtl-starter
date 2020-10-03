import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import TitleAndMeta from "../components/TitleAndMeta";

import Container from "../components/Container";
import { articleLayout } from "../theme";
import Header from "../components/Header";

const NotFound = ({ data, location }) => {
  const { content, title: contentTittle } = data.strapiSiteMeta;

  return (
    <Layout location={location}>
      <Container>
        <TitleAndMeta title={contentTittle} />
        <div css={articleLayout.container}>
          <div>
            <Header>{contentTittle}</Header>

            <div css={articleLayout.content}>
              <p />
              <p>{content}</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    strapiSiteMeta(slug: { eq: "404" }) {
      title
      content
    }
  }
`;

export default NotFound;

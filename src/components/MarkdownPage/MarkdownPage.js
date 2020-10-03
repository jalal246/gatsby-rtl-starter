/* eslint-disable react/no-danger */
import React from "react";
import { articleLayout } from "theme";
import Container from "../Container";
import Flex from "../Flex";
import TitleAndMeta from "../TitleAndMeta";
import HeaderAndTime from "../HeaderAndTime";
import createCanonicalUrl from "../../utils/createCanonicalUrl";

const MarkdownPage = ({ slug, date, title, description, html }) => {
  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      hAlign="stretch"
      css={{
        flex: "1 0 auto",
        width: "100%",
        position: "relative",
        zIndex: 0,
      }}
    >
      <TitleAndMeta
        description={description}
        type="article"
        title={title}
        url={createCanonicalUrl(slug)}
      />
      <div css={{ flex: "1 0 auto" }}>
        <Container>
          <Flex
            Component="article"
            direction="column"
            grow="1"
            vAlign="stretch"
          >
            <HeaderAndTime isMain slug={slug} title={title} date={date} />
            <div css={articleLayout.container}>
              <div
                css={[articleLayout.content]}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </Flex>
  );
};

export default MarkdownPage;

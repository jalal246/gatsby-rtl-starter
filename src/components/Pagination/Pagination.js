import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import ButtonLink from "../ButtonLink";
import Flex from "../Flex";

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasPrevPage,
  hasNextPage,
}) => {
  const {
    site: {
      siteMetadata: {
        PAGINATION: { NEXT_PAGE, PREV_PAGE },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          PAGINATION {
            PREV_PAGE
            NEXT_PAGE
          }
        }
      }
    }
  `);

  return (
    <div css={{ paddingBottom: 30 }}>
      <Flex hAlign="space-between" css={{ marginTop: 2 }}>
        <div>
          {hasNextPage && (
            <ButtonLink rel="next" to={nextPagePath}>
              {NEXT_PAGE}
            </ButtonLink>
          )}
        </div>

        <div>
          {hasPrevPage && (
            <ButtonLink rel="prev" to={prevPagePath}>
              {PREV_PAGE}
            </ButtonLink>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Pagination;

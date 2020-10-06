import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

// remove this line for your site.
const defaultAuthorName = "Jalal Maskoun";

const TitleAndMeta = ({
  title,
  author,
  url,
  type = "website",
  description,
  ogImage,
}) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        title: siteName,
        description: defaultDescription,
        author: { /** name: defaultAuthorName * */ fbID },
        googleVerification,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          googleVerification
          author {
            name
            fbID
          }
        }
      }
    }
  `);

  const canonicalUrl = url || siteUrl;
  const renderDesc = description || defaultDescription;
  const renderTitle = title
    ? `${siteName} - ${title}`
    : `${siteName} - ${defaultDescription}`;
  const renderAuthor = author || defaultAuthorName;

  return (
    <Helmet title={renderTitle}>
      <meta name="google-site-verification" content={googleVerification} />
      <meta name="title" content={renderTitle} />
      <meta name="description" content={renderDesc} />

      <meta property="og:title" content={renderTitle} />
      <meta property="og:description" content={renderDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={siteUrl} hrefLang="ar" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={renderAuthor} />
      <meta property="twitter:title" content={renderTitle} />
      <meta property="twitter:description" content={renderDesc} />
      <meta name="twitter:domain" content={siteUrl} />

      {fbID && <meta property="fb:app_id" content={fbID} />}
    </Helmet>
  );
};

export default TitleAndMeta;

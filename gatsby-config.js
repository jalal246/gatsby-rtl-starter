const config = require("./config");
const content = require("./content");

const plugins = [
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-twitter`,
  `gatsby-plugin-emotion`,
  // `gatsby-plugin-feed`,
  {
    resolve: "gatsby-plugin-nprogress",
    options: {
      color: "#61dafb",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "content",
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: `https://strapi-monogo-rtl.herokuapp.com`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`blog`, `site-meta`],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 840,
          },
        },
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-external-links`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      trackingId: config.trackingId,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
];

module.exports = {
  siteMetadata: { ...config, ...content },
  plugins,
};

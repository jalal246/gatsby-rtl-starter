# Gatsby RTL blog starter with Strapi CMS

This is a highly customized rtl starter:

- Includes Strapi as a CMS. Connected to the Strapi server hosted in Heroku.

- Pages auto generated from server. Including blogs pages `blog/**/title` and
  internal pages `pages/title`.

- Templates for the blog, feed, page, and 404.

- A very component-based to increase your work productivity and make it for
  customization.

- Has SEO runs for each page in the site. With google verification and
  analytics meta links.

- SVG Social icons (not all included in the header).

- ESlint config with Prettier.

> Samples are written in Arabic but the starter works for any rtl languages
> including Hebrew.

## Strapi CMS

- You can find the source code here
  [strapi-monogo-rtl](https://github.com/jalal246/strapi-monogo-rtl) includes
  all the features.

- Check out the graphql server:
  [strapi-monogo-rtl/graphql](https://strapi-monogo-rtl.herokuapp.com/graphql).

- Strapi is deployed on [Heroku](https://strapi-monogo-rtl.herokuapp.com/).

## Deployment

- Clone the repo `https://github.com/jalal246/gatsby-rtl-starter.git`

- Instal dependencies `yarn`

- Start deployment `yarn develop`

- To deployment to netlify [follow connecting to Netlify guide](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)

## Known limitations

- It's not responsive.

- Despite it has all plugins to read local content, I don't think there's a need
  to aut generate pages form local based content since it already has Strapi.

### PRs are welcome

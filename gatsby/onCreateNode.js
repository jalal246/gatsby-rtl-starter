/* eslint-disable camelcase */

const kebabCase = require("lodash.kebabcase");

function appendHTML(slug) {
  return `${slug}.html`;
}

function getSlug({ dt, title }) {
  const slugifyTitle = kebabCase(title);

  const dateSlug = new Date(dt).toJSON().slice(0, 10).replace(/-/g, "/");

  const slug = `/blog/${dateSlug}/${slugifyTitle}`;

  return slug;
}

function onCreateNode({ node, actions }) {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === `StrapiBlog`) {
    const { title, createdAt: dt } = node;
    slug = getSlug({ dt, title });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }

  if (node.internal.type === `StrapiSiteMeta`) {
    slug = `/pages/${node.slug}`;

    createNodeField({
      node,
      name: "slug",
      value: appendHTML(slug),
    });
  }
}

module.exports = onCreateNode;

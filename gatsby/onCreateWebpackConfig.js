const path = require("path");

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        theme: path.resolve(__dirname, "../src/theme.js"),
      },
    },
  });
};

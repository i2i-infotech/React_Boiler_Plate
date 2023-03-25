const commonPaths = require("./common-paths");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CopyWebpack = new CopyWebpackPlugin({
  patterns: [{ from: "./public/assets", to: "assets" }],
});
const config = {
  output: {
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  target: "web",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
    CopyWebpack,
  ],
};

module.exports = config;

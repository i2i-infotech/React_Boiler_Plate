const commonPaths = require("./common-paths");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const port = process.env.PORT || 8000;

const config = {
  mode: "development",
  entry: {
    app: [`${commonPaths.appEntry}/index.js`, "webpack-plugin-serve/client"],
  },
  output: {
    filename: "static/[name].[fullhash].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader", // inject CSS to page
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                mode: "local",
                exportLocalsConvention: "camelCaseOnly",
                namedExport: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new Dotenv(),

    new MiniCssExtractPlugin({
      filename: "styles/[name].[fullhash].css",
    }),
    new Serve({
      historyFallback: true,
      liveReload: true,
      hmr: true,
      host: "localhost",
      port: port,
      open: true,
      static: commonPaths.outputPath,
    }),
  ],
  watch: true,
};

module.exports = config;

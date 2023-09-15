const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/components/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]", // change back file name to original because webpack will generate new file name
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        // Loading css
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        // Loading images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        // Loading fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page | Wing Wanderer",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};

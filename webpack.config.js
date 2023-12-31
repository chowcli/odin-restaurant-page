const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/components/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]", // change back file name to original because webpack will generate new file name
  },

  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

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

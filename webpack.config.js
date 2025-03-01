import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"], // Make sure .jsx files are resolved
    alias: {
      Components: path.resolve(__dirname, "src/components/"), // Alias for components
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Ensure jsx files are handled
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
      publicPath: "/",
    },
    port: 9001,
  },
  mode: "development",
};

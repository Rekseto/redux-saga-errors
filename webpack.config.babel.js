import path from "path";
import webpack from "webpack";

export default {
  devtool: "source-map",
  entry: path.resolve(__dirname, "lib/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: "redux-saga-errors",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "lib"),
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

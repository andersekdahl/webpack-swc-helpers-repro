module.exports = {
  entry: "./src/entry.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              externalHelpers: true,
            },
            isModule: "unknown",
          },
        },
      },
    ],
  },
};

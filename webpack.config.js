module.exports = {
  entry: {
    main: './src/js/main.jsx',
    search: './src/js/search.jsx',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: "jsx-loader"
    }]
  },
  externals: {
    "jquery": "jQuery",
    "react": "React"
  }
}

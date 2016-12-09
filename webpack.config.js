module.exports = {
  entry: './game.jsx',
  output: {
    // path: 'build', output and save bundle.js inside directory named build
    filename: 'bundle.js' //convention
  },

  module: {
    loaders: [
      {
        test: /\.js$/, //Run through loader if encounter .js files
        exclude: /node_modules/,
        loader: 'babel-loader' //Look to seed file to see which transformations babel should make
      }
    ]
  }
};

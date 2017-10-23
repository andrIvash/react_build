
// import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
const webpack  = require('webpack');
const path = require('path');
// import StyleLintPlugin from 'stylelint-webpack-plugin';

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: 'source-map',
  entry: {
    app: ['./scripts/main.js']
  },
  output: {
    // publicPath: '',        
    filename: 'assets/scripts/[name].bundle.js',
    path: path.join(__dirname, './build')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'assets/scripts/common.js',
      minChunks: 2
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      //CDN: JSON.stringify('https://ad.csdnevnik.ru/special/staging/riff/assets/')
      //https://ad.csdnevnik.ru/special/staging/panini/assets/
      CDN: JSON.stringify('http://localhost:300/assets/')
    })
    // new StyleLintPlugin({
    //   configFile: './.stylelintrc',
    // })
    // new FaviconsWebpackPlugin('./favicon.png')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   exclude: /(node_modules|bower_components)/,
      //   loader: "eslint-loader",
      //   options: {
      //       fix: true
      //   }
      // },
    ]
  }
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylesheetsLoader =
  'style-loader!css-loader?modules&localIdentName=[path]-[local]-[hash:base64:3]';
const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });
const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'true'))
});

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    filename: '[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
    plugins: [
        htmlWebpackPlugin,
        definePlugin,
        new ExtractTextPlugin("[name].css")
    ],
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
        { test: /\.css$/, loader: ExtractTextPlugin.extract(
            {
                fallback: "style-loader",
                use: "css-loader"
            }
        )},
      { test: /\.scss$/, loader: `${stylesheetsLoader}'!sass` },
      { test: /\.sass$/, loader: `${stylesheetsLoader}'!sass?indentedSyntax=sass` },
      { test: /\.less$/, loader: `${stylesheetsLoader}'!less` },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/v1/': {
        target: 'http://188.166.226.189:8000/',
        secure: false,
        changeOrigin: true
      },
      '/static/img': {
        target: 'http://188.166.226.189:8000/',
        secure: false,
        changeOrigin: true
      },
      '/interface/v1/': {
        target: 'https://payment.bitocean.com/oceancast/',
        secure: false
      }
    }
  }
};

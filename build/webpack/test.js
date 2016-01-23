import webpack           from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackConfig     from './_base';

webpackConfig.output.filename = '[name].[hash].js'

webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[contenthash].css'),
  new webpack.optimize.UglifyJsPlugin()
);


// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);
commonChunkPlugin.__KARMA_IGNORE__ = true;
webpackConfig.plugins.push(commonChunkPlugin);

export default webpackConfig;

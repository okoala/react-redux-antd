import ExtractTextPlugin from 'extract-text-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import webpackConfig from './_base'
import config from '../../config'
import webpack from 'webpack'

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].css'),
  new BrowserSyncPlugin({
    proxy: `${config.server_host}:${config.server_port}/`
  })
)

// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].js'
)
commonChunkPlugin.__KARMA_IGNORE__ = true
webpackConfig.plugins.push(commonChunkPlugin)

export default webpackConfig

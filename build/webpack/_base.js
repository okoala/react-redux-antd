import webpack           from 'webpack'
import path              from 'path'
import config            from '../../config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const paths = config.utils_paths
const globals = config.globals
const dirDist = config.dir_src

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  entry   : {
    app : [
      paths.project(config.dir_src) + '/index.js'
    ],
    vendor : config.vendor_dependencies
  },
  output : {
    filename   : '[name].js',
    path       : paths.project(config.dir_dist) + '/public',
    publicPath : '/public/'
  },
  plugins : [
    new webpack.DefinePlugin(globals),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : true,
      filename : 'index.html',
      inject   : 'body'
    })
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'antd'],
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      {
        test    : /\.less$/,
        loaders : [
          'style-loader',
          'css-loader',
          'autoprefixer?browsers=last 2 version',
          'less-loader?{"sourceMap":true,"modifyVars":{"primary-color": "#ff6f00", "link-color": "#ff6f00"}}' // 调整antd的主题颜色
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*)?$/,   loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      { test: /\.svg(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
      /* eslint-enable */
    ]
  },
  eslint : {
    configFile : paths.project('.eslintrc'),
    failOnError : globals.__PROD__,
    emitWarning : globals.__DEV__
  },
  sassLoader : {
    includePaths : paths.src('styles')
  }
};


export default webpackConfig;

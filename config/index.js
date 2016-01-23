import path     from 'path'
import { argv } from 'yargs'

const env = process.env.NODE_ENV || 'development'
const envConfig = require('./' + env + '.json')

const config = {
  env: env,

  // 项目结构
  path_project : path.resolve(__dirname, '../'),
  dir_src   : 'src',
  dir_dist  : '.dist',
  dir_server: 'server',
  dir_test  : 'tests',

  // 服务器配置
  api_target: envConfig.api_target,
  server_host: 'localhost',
  server_port: envConfig.port || 4000,

  vendor_dependencies: [
    'react',
    'react-redux',
    'react-router',
    'redux',
    'redux-simple-router'
  ]
}

// Webpack配置
config.webpack_port = 3000
config.webpack_public_path = `http://${config.server_host}:${config.webpack_port}/`

// ------------------------------------
// 配置相关环境变量
// ------------------------------------
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__DEBUG__'    : !!argv.debug
}

// ------------------------------------
// 校验Vendor依赖是否正常加载
// ------------------------------------
const pkg = require('../package.json')

config.vendor_dependencies = config.vendor_dependencies
  .filter(dep => {
    if (pkg.dependencies[dep]) return true

    console.warn(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.\n` +
      `Consider removing it from vendor_dependencies in ~/config/index.js`
    )
  })


// ------------------------------------
// Utilities
// ------------------------------------
config.utils_paths = (() => {
  const base = [config.path_project];
  const resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.dir_src),
    dist    : project.bind(null, config.dir_dist)
  }
})()

export default config

import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'redux-simple-router'
import createLogger from 'redux-logger'

import promiseMiddleware from './middlewares/promiseMiddleware'
import afterApiMiddleware from './middlewares/afterApiMiddleware'

import rootReducer from './reducers'
import initState from './initState'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})

/**
 * 创建store中间件
 *
 */
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']}),
  afterApiMiddleware,
  loggerMiddleware,
  syncHistory(browserHistory)
)(createStore)

const store = createStoreWithMiddleware(rootReducer, initState)

export default store

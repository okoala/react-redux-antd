import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './globalInitState'

export default createReducer(new InitState, {
  [`${types.GET_SITE_INFO}_SUCCESS`]: (state, data) => {
    return state.set('siteInfo', data)
  },

  [`${types.GET_SITE_STATS}_SUCCESS`]: (state, data) => {
    return state.set('siteStats', data)
  },

  [`${types.GET_ALL_NODES}_SUCCESS`]: (state, data) => {
    return state.set('nodes', data)
  }
})

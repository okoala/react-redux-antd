import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './userInitState'

export default createReducer(new InitState, {
  [`${types.GET_USER_INFO}_SUCCESS`]: (state, data, params) => {
    return state.setIn(['userInfo', params.username], data)
  }
})

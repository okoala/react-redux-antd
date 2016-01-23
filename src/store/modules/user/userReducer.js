
import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './userInitState'

const initState = new InitState

export default createReducer(initState, {
  [types.UPDATE_USER_DATA]: (state, action) => {
    return state.setIn('userData', action.data)
  },

  [`${types.ALTER_PASSWORD}_SUCCESS`]: (state) => {
    message.success('更改密码成功')
    return state.set('hasAlter', true)
  }
})

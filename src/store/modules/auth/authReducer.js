import types from '../../types'
import { createReducer } from '../../../util'
import { message } from 'antd'
import InitState from './authInitState'

const initState = new InitState

export default createReducer(initState, {
  [`${types.LOGIN}_SUCCESS`]: (state, action) => {
    let _state = state
    message.success('登陆成功！')

    _state = _state.set('authenticated', true)
    localStorage.setItem('shopInfo', JSON.stringify(action.data))

    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
    return _state
  },

  [`${types.LOGIN}_FAILURE`]: (state, msg) => {
    message.error(msg)
    return state.set('authenticated', false)
  },

  [`${types.USER_SIGNOUT}_SUCCESS`]: (state) => {
    state.set('authenticated', false)
    window.location.href = '/login'
    return state
  },

  [`${types.USER_CHANGE_PWD}_SUCCESS`]: (state, msg) => {
    message.success('修改密码成功！')
    setTimeout(() => {
      window.location.href = '/login'
    }, 1000)
    return state
  }
})

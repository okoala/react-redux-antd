/**
 * 登陆相关的业务逻辑
 *
 */

import api from '../../../api'
import types from '../../types'

export function submit (params) {
  return {
    type: types.LOGIN,
    payload: {
      promise: api.login.save(params)
    },
    params
  }
}

export function signout () {
  return {
    type: types.USER_SIGNOUT,
    payload: {
      promise: api.signout.get()
    }
  }
}

export function changePwd (params) {
  return {
    type: types.USER_CHANGE_PWD,
    payload: {
      promise: api.changePwd.save(params)
    },
    params: params
  }
}


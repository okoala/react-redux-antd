/**
 * 用户信息
 */

import api from '../../../api'
import types from '../../types'

// 获取最新的主题
export function getUserInfo (username) {
  return {
    type: types.GET_USER_INFO,
    payload: {
      promise: api.showMember.get({username})
    },
    params: {username}
  }
}

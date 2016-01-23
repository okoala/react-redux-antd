/**
 * 全局的一些数据
 */

import api from '../../../api'
import types from '../../types'

// 获取v2ex网站基本信息
export function getSiteInfo () {
  return {
    type: types.GET_SITE_INFO,
    payload: {
      promise: api.siteInfo.get()
    }
  }
}

// 获取网站状态
export function getSiteStats () {
  return {
    type: types.GET_SITE_STATS,
    payload: {
      promise: api.siteStats.get()
    }
  }
}

export function getAllNodes () {
  return {
    type: types.GET_ALL_NODES,
    payload: {
      promise: api.nodes.get()
    }
  }
}

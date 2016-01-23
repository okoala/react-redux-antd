/**
 * 订单相关的业务逻辑
 */

import api from '../../../api'
import types from '../../types'

import * as OrderProcess from '../../../constants/OrderProcess'

// 开始任务
export function startOrder (params) {
  return {
    type: types.START_SHOP_ORDER,
    payload: {
      promise: api.startOrder.save(params)
    },
    params
  }
}

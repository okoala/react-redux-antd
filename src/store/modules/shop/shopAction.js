/**
 * 商户业务逻辑
 *
 *
 */
import api from '../../../api'
import types from '../../types'

/**
 * 历史订单相关逻辑
 *
 * @type {String}
 */
export function loadShopDetail (params = {}) {
  return {
    type: types.FETCH_SHOP_DETAIL,
    payload: {
      promise: api.shopDetail.get(params)
    },
    params
  }
}

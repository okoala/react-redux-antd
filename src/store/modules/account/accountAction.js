/**
 * 相关的业务逻辑
 *
 *
 */

import api from '../../../api'
import types from '../../types'

export function loadAccount (params = {}) {
  return {
    type: types.ACCOUNTS,
    payload: {
      promise: api.loadAccount.get(params)
    },
    params
  }
}

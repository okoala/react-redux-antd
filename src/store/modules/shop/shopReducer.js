
import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './shopInitState'

const initState = new InitState

export default createReducer(initState, {
  /**
   * 待保养订单状态
   * @param  {[type]} state  [description]
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  [`${types.FETCH_SHOP_DETAIL}_SUCCESS`]: (state, action) => {
    return state.set('shopDetail', action.data)
  }
})

import types from '../../types'
import { createReducer } from '../../../util'
import { message } from 'antd'
import InitState from './orderInitState'

const initState = new InitState


export default createReducer(initState, {
  /**
   * 开始订单状态
   * @param  {[type]} state  [description]
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  [`${types.START_SHOP_ORDER}_SUCCESS`]: (state, action) => {
    message.success('操作成功')

    setTimeout(function() {
      window.history.go(-1)
    }, 1000)

    return setOrderProcess(state, action)
  }
})

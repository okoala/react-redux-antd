/**
 * 登陆中间件
 *
 */
import types from '../types'
import RES_CODE from '../../constants/ResCode'
import { message } from 'antd'

export default store => next => action => {
  // 这块根据自己的接口形式决定
  // if (action.payload && action.payload.data.code) {
  //   const code = action.payload.data.code
  //   const msg = action.payload.data.message || '操作失败！'

  //   if (Number(code) !== 200) {
  //     message.error(msg)
  //     return
  //   }

  //   switch (RES_CODE[code]) {
  //   case types.NEED_LOGIN:
  //     action.type = 'USER_SIGNOUT_SUCCESS'
  //     break
  //   default:
  //     break
  //   }
  // }

  next(action)
}

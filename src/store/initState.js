/**
 * States
 *
 */
import accountInitState from './modules/account/accountInitState'
import authInitState from './modules/auth/authInitState'
import incomeInitState from './modules/income/incomeInitState'
import orderInitState from './modules/order/orderInitState'
import shopInitState from './modules/shop/shopInitState'
import userInitState from './modules/user/userInitState'

/**
 * 初始化states
 *
 * @return {[type]} [description]
 */
const initialState = {
  account: new accountInitState,
  auth: new authInitState,
  income: new incomeInitState,
  order: new orderInitState,
  shop: new shopInitState,
  user: new userInitState
}

export default initialState

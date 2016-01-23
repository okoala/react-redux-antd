import * as accountAction from './modules/account/accountAction'
import * as authAction from './modules/auth/authAction'
import * as orderAction from './modules/order/orderAction'
import * as shopAction from './modules/shop/shopAction'

export default {
  ...accountAction,
  ...authAction,
  ...orderAction,
  ...shopAction
}

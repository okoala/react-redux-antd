import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import account from './modules/account/accountReducer'
import auth from './modules/auth/authReducer'
import income from './modules/income/incomeReducer'
import order from './modules/order/orderReducer'
import shop from './modules/shop/shopReducer'
import user from './modules/user/userReducer'

export default combineReducers({
  account,
  auth,
  income,
  order,
  shop,
  user,
  router: routeReducer
});

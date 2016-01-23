import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import topic from './modules/topic/topicReducer'
import user from './modules/user/userReducer'

export default combineReducers({
  topic,
  user,
  router: routeReducer
});

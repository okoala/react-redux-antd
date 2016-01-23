/**
 * States
 *
 */
import topicInitState from './modules/topic/topicInitState'
import userInitState from './modules/user/userInitState'

/**
 * 初始化states
 *
 * @return {[type]} [description]
 */
const initialState = {
  topic: new topicInitState,
  user: new userInitState
}

export default initialState

import * as globalAction from './modules/global/globalAction'
import * as replyAction from './modules/reply/replyAction'
import * as topicAction from './modules/topic/topicAction'
import * as userAction from './modules/user/userAction'

export default {
  ...globalAction,
  ...replyAction,
  ...topicAction,
  ...userAction,
}

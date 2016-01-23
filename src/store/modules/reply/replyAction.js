/**
 * 回复相关
 */

import api from '../../../api'
import types from '../../types'

// 根据主题ID获取回复内容
export function getRepliesByTopicId (topic_id) {
  return {
    type: types.GET_TOPIC_REPLIES,
    payload: {
      promise: api.showReply.save({topic_id})
    },
    params: {topic_id}
  }
}

/**
 * 话题
 */

import api from '../../../api'
import types from '../../types'

// 获取最新的主题
export function getTopicsLatest () {
  return {
    type: types.GET_TOPICS_LATEST,
    payload: {
      promise: api.topicsLatest.get()
    }
  }
}

// 获取最热的主题
export function getTopicsHot () {
  return {
    type: types.GET_TOPICS_HOT,
    payload: {
      promise: api.topicsHot.get()
    }
  }
}

// 根据主题ID获取主题内容
export function getTopicById (id) {
  return {
    type: types.GET_TOPIC_BY_ID,
    payload: {
      promise: api.showTopic.get({id})
    },
    params: {id}
  }
}

// 根据NODE NAME获取主题内容
export function getTopicByNodeName (node_name) {
  return {
    type: types.GET_TOPIC_BY_NODE,
    payload: {
      promise: api.showTopic.get({node_name})
    },
    params: {node_name}
  }
}

// 根据Username获取主题内容
export function getTopicByUser (username) {
  return {
    type: types.GET_TOPIC_BY_USER,
    payload: {
      promise: api.showTopic.get({username})
    },
    params: {username}
  }
}

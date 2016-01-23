import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './replyInitState'

export default createReducer(new InitState, {
  [`${types.GET_TOPIC_REPLIES}_SUCCESS`]: (state, data, params) => {
    return state.setIn(['replies', params.topic_id], data)
  }
})

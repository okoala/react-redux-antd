import { createReducer } from '../../../util'
import types from '../../types'
import { message } from 'antd'
import InitState from './accountInitState'

const initState = new InitState

export default createReducer(initState, {
  [`${types.ACCOUNTS}_SUCCESS`]: (state, action) => {
    return state.set('accountData', action.data)
  }
})

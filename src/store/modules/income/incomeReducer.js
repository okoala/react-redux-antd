import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import Inittate from './incomeInitState'

const initState = new Inittate

export default createReducer(initState, {
  [`${types.FETCH_INCOME}_SUCCESS`]: (state, action) => {
    return state.set('incomeData', action.data)
  }
})

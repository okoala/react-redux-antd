import { Record } from 'immutable'

const InitState = Record({
  accountData: {},
  accountVerifyData: {pageData: []},
  accountFinishedData: {pageData: []}
})

export default InitState

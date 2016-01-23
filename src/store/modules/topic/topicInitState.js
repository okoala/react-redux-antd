import { Record, Map } from 'immutable'

const initState = Record({
  latest: [],
  hot: [],
  topics: new Map(),
  nodeTopics: new Map(),
  userTopics: new Map()
})

export default initState

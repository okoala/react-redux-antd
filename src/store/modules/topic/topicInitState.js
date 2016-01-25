import { Record, Map } from 'immutable'

const initState = Record({
  current: [],
  latest: [],
  hot: [],
  topics: new Map(),
  nodeTopics: new Map(),
  userTopics: new Map()
})

export default initState

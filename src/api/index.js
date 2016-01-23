import Resource from 'vue-resource'

// 直接拿vue-resouce过来用，比较熟
const V = function() {}
V.util = {
  warn: console.warn,
  nextTick: () => {}
}
Resource(V)

V.http.options.emulateJSON = true

export default {
  siteInfo: V.resource('http://www.v2ex.com/api/site/info.json'),
  siteStats: V.resource('http://www.v2ex.com/api/site/stats.json'),
  nodes: V.resource('http://www.v2ex.com/api/nodes/all.json'),
  topicsLatest: V.resource('http://www.v2ex.com/api/topics/latest.json'),
  topicsHot: V.resource('http://www.v2ex.com/api/topics/hot.json'),
  showNode: V.resource('http://www.v2ex.com/api/nodes/show.json'),
  showTopic: V.resource('http://www.v2ex.com/api/topics/show.json'),
  showReply: V.resource('http://www.v2ex.com/api/replies/show.json')
  showMember: V.resource('http://www.v2ex.com/api/members/show.json')
}

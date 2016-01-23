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
  siteInfo: V.resource('/proxy/api/site/info.json'),
  siteStats: V.resource('/proxy/api/site/stats.json'),
  nodes: V.resource('/proxy/api/nodes/all.json'),
  topicsLatest: V.resource('/proxy/api/topics/latest.json'),
  topicsHot: V.resource('/proxy/api/topics/hot.json'),
  showNode: V.resource('/proxy/api/nodes/show.json'),
  showTopic: V.resource('/proxy/api/topics/show.json'),
  showReply: V.resource('/proxy/api/replies/show.json'),
  showMember: V.resource('/proxy/api/members/show.json')
}

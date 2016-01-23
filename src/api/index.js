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
  login: V.resource('/api/login'),
  signout: V.resource('/api/login/cancel')
}

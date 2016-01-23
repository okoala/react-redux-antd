import { Record } from 'immutable'

let shopInfo = localStorage.getItem('shopInfo')
shopInfo = shopInfo ? JSON.parse(shopInfo) : {}

const InitState = Record({
  shopInfo: shopInfo,
  error: true,
  authenticated: true
})

export default InitState

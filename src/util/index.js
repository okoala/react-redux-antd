import { IMAGE_HOST_TEST, IMAGE_HOST_PROD } from '../constants'

export const noop = function noop() {}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    return reducer ? reducer(state, action.payload.data, action.params) : state
  }
}

const fixNumber = function(date) {
  const dateLength = 13;
  const len = date.length;

  let diffLen = dateLength - len;
  let diff = '';

  while (diffLen) {
    diff += '0';
    diffLen--;
  }

  return date + diff;
};

export function dateFormat (date, format) {
  let _format = format || 'yyyy-MM-dd';

  const d = date;
  const o = {
    'M+' : d.getMonth() + 1, // month
    'd+' : d.getDate(), // day
    'h+' : d.getHours(), // hour
    'm+' : d.getMinutes(), // minute
    's+' : d.getSeconds(), // second
    'q+' : Math.floor((d.getMonth() + 3) / 3), // quarter
    'S' : d.getMilliseconds() // millisecond
  };

  if (/(y+)/.test(_format)) {
    _format = _format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if (o.hasOwnProperty(k) && new RegExp('(' + k + ')').test(_format)) {
      _format = _format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }

  return _format;
}

export function imgTrustUrl (url) {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    return IMAGE_HOST_TEST + url
  } else if (process.env.NODE_ENV === 'production') {
    return IMAGE_HOST_PROD + url
  } else {
    return url
  }
}

export function isPromise (value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function'
  }
}

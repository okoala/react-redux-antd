/**
 * Utility functions.
 */
import Promise from './promise';

const _ = {};

function extend (target, source, deep) {
  for (const key in source) {
    if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
      if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
        target[key] = {};
      }
      if (_.isArray(source[key]) && !_.isArray(target[key])) {
        target[key] = [];
      }

      extend(target[key], source[key], deep);
    } else if (source[key] !== undefined) {
      target[key] = source[key];
    }
  }
}

_.isFunction = function (obj) {
  return obj && typeof obj === 'function';
};

_.isString = function(value) {
  return value && typeof value === 'string';
};

_.isNumber = function(value) {
  return typeof value === 'number';
};

_.options = function (key, obj, options) {
  const opts = obj.$options || {};

  return _.extend({},
    opts[key],
    options
  );
};

_.each = function (obj, iterator) {
  let i;
  let key;

  if (typeof obj.length == 'number') {
    for (i = 0; i < obj.length; i++) {
      iterator.call(obj[i], obj[i], i);
    }
  } else if (_.isObject(obj)) {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        iterator.call(obj[key], obj[key], key);
      }
    }
  }

  return obj;
};

_.extend = function (target) {
  const array = [];
  const args = array.slice.call(arguments, 1);

  let deep;

  if (typeof target == 'boolean') {
    deep = target;
    target = args.shift();
  }

  args.forEach(function (arg) {
    extend(target, arg, deep);
  });

  return target;
};


_.Promise = Promise;

export default _;

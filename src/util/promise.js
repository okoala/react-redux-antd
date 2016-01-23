let Promise = window.Promise;

if (!Promise) {
  Promise = function (executor) {
    executor(this.resolve.bind(this), this.reject.bind(this));
    this._thens = [];
  };

  Promise.prototype = {
    then: function (onResolve, onReject, onProgress) {
      this._thens.push({resolve: onResolve, reject: onReject, progress: onProgress});
    },

    'catch': function (onReject) {
      this._thens.push({reject: onReject});
    },

    resolve: function (value) {
      this._complete('resolve', value);
    },

    reject: function (reason) {
      this._complete('reject', reason);
    },

    progress: function (status) {
      let i = 0;
      let aThen;

      while (aThen = this._thens[i++]) {
        aThen.progress && aThen.progress(status);
      }
    },

    _complete: function (which, arg) {
      this.then = which === 'resolve' ?
        function (resolve) { resolve && resolve(arg); } :
        function (resolve, reject) { reject && reject(arg); };

      this.resolve = this.reject = this.progress =
        function () { throw new Error('Promise already completed.'); };

      let aThen;
      let i = 0;

      while (aThen = this._thens[i++]) {
        aThen[which] && aThen[which](arg);
      }

      delete this._thens;
    }
  };
}

export default Promise;

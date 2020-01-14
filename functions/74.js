const function74 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(2),
        r = function (t) {
            function e(e, i) {
                void 0 === i && (i = 0);
                var n = t.call(this) || this;
                return n._onComplete = function () {
                    null != n._func && n._func(), n._endTask()
                }, n._func = e, n._delay = i, n
            }
            return n(e, t), e.prototype._start = function () {
                0 == this._delay ? this._onComplete() : createjs.Tween.get(null).wait(this._delay).call(this._onComplete)
            }, e
        }(o.TaskBase);
    e.FuncTask = r
}
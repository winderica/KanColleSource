const function412 = function (t, e, i) {
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
        r = i(413),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._result = [], n._layer = e, n._candidates_list = null == i ? [] : i.concat(), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                if (0 == this._candidates_list.length) return void this._endTask();
                var e = this._candidates_list.shift(),
                    i = new r.TaskRewardSelect(this._layer, e);
                i.start(function () {
                    t._result.push(i.result), t._start()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._candidates_list = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskRewardSelectMulti = s
}
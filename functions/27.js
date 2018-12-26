const function27 = function (t, e, i) {
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
            function e() {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                var n = t.call(this) || this;
                return n._started = !1, n._tasks = null != e ? e.concat() : [], n
            }
            return n(e, t), e.prototype.add = function (t) {
                if (1 == this._started) throw new Error("ParallelTask::add");
                return null != t && this._tasks.push(t), this
            }, e.prototype._start = function () {
                var t = this;
                if (1 == this._started) throw new Error("ParallelTask::start");
                if (this._started = !0, 0 == this._tasks.length) this._endTask();
                else
                    for (var e = this._tasks.concat(), i = 0, n = e; i < n.length; i++) {
                        var o = n[i];
                        ! function (e) {
                            e.start(function () {
                                var i = t._tasks.indexOf(e);
                                t._tasks.splice(i, 1), t._endCheck()
                            })
                        }(o)
                    }
            }, e.prototype._endCheck = function () {
                0 == this._tasks.length && this._endTask()
            }, e
        }(o.TaskBase);
    e.ParallelTask = r
}
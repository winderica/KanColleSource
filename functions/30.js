const function30 = function (t, e, i) {
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
                if (1 == this._started) throw new Error("SerialTask::add");
                return null != t && this._tasks.push(t), this
            }, e.prototype._start = function () {
                if (1 == this._started) throw new Error("SerialTask::start");
                this._started = !0, this._endCheck()
            }, e.prototype._startTask = function () {
                var t = this;
                this._current = this._tasks.shift(), this._current.start(function () {
                    t._current = null, t._endCheck()
                })
            }, e.prototype._endCheck = function () {
                null == this._tasks || 0 == this._tasks.length ? this._endTask() : this._startTask()
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), this._tasks = null, this._current = null, t.prototype._endTask.call(this, e)
            }, e
        }(o.TaskBase);
    e.SerialTask = r
}
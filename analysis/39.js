const function39 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(2), r = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._time = 0, i._time = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            createjs.Tween.get(null).wait(this._time).call(function () {
                t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.WaitTask = r
}
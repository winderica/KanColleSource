const function1447 = function (t, e, i) {
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
    var o = i(2), r = i(24), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._event = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._load()
        }, e.prototype._load = function () {
            var t = this, e = new r.UIImageLoader("battle_result");
            e.add("battle_result_main.json"), this._event && e.add("battle_result_event.json"), e.load(function () {
                t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.TaskLoadResourcesBattleResult = s
}
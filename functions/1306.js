const function1306 = function (t, e, i) {
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
    var o = i(2), r = i(21), s = function (t) {
        function e(e, i) {
            void 0 === e && (e = !1), void 0 === i && (i = !1);
            var n = t.call(this) || this;
            return n._night = e, n._combined = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._loadCommon()
        }, e.prototype._loadCommon = function () {
            var t = this, e = new r.UIImageLoader("common");
            e.add("common_explosion.json"), e.load(function () {
                t._load()
            })
        }, e.prototype._load = function () {
            var t = this, e = new r.UIImageLoader("battle");
            e.add("battle_main.json"), e.add("battle_telop.json"), e.add("battle_cutin_anti_air.json"), 1 == this._night && (e.add("battle_night.json"), e.add("battle_telop_sp.json")), e.add("battle_jin.json"), 1 == this._combined && e.add("battle_jin_combined.json"), e.load(function () {
                t._endTask()
            })
        }, e
    }(o.TaskBase);
    e.TaskLoadResourcesBattle = s
}
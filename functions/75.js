const function75 = function (t, e, i) {
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
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._night = i, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "scene", {
            get: function () {
                return this._scene
            }, enumerable: !0, configurable: !0
        }), e.prototype.isNight = function () {
            return this._night
        }, e
    }(o.TaskBase);
    e.PhaseCombatBase = r
}
/*
 * the function called by `495.js`
 * reward is ship
 */
const function185 = function (t, e, i) {
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
    var o = i(0),
        r = i(46),
        s = function (t) {
            function e(e, i) {
                void 0 === i && (i = null);
                var n = t.call(this) || this;
                return n._mst_id = e, n._message = i, n
            }

            n(e, t);
            Object.defineProperty(e.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                }, enumerable: !0, configurable: !0
            });
            Object.defineProperty(e.prototype, "name", {
                get: function () {
                    var t = o.default.model.ship.get(this._mst_id);
                    return null == t ? "" : t.name
                }, enumerable: !0, configurable: !0
            });
            return e
        }(r.RewardModel);
    e.RewardModelShip = s
}
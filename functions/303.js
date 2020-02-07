const function303 = function (t, e, i) {
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
    var o = i(47),
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._area_id = e, n._map_no = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "map_no", {
                get: function () {
                    return this._map_no
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(o.RewardModel);
    e.RewardModelMap = r
}
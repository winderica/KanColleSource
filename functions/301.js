const function301 = function (t, e, i) {
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
    var o = i(46),
        r = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._area_id = e, o._message1 = i, o._message2 = n, o
            }
            return n(e, t), Object.defineProperty(e.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message1", {
                get: function () {
                    return this._message1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message2", {
                get: function () {
                    return this._message2
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(o.RewardModel);
    e.RewardModelAirUnit = r
}
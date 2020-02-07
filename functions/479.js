const function479 = function (t, e, i) {
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
    var o = i(480),
        r = i(481),
        s = i(1472),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._o = e, i._raw = new s.RawDayBattleData(e), i._common = new r.BattleCommonModel(e), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "phase", {
                get: function () {
                    return "day"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "raw", {
                get: function () {
                    return this._raw
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getRation = function () {
                return this._raw.ration
            }, e.prototype.getRationCombined = function () {
                return this._raw.ration_combined
            }, e
        }(o.BattleRecord);
    e.BattleRecordDay = a
}
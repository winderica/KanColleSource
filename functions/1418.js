const function1418 = function (t, e, i) {
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
    var o = i(7), r = i(467), s = i(466), a = i(468), _ = i(1419), l = i(1420), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._o = e, i._raw = new l.RawNightBattleData(e), i._common = new a.BattleCommonModel(e), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "phase", {
            get: function () {
                return "night"
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "raw", {
            get: function () {
                return this._raw
            }, enumerable: !0, configurable: !0
        }), e.prototype.getAllyAttack = function () {
            var t = o.ObjUtil.getObject(this._o, "api_friendly_info"),
                e = o.ObjUtil.getObject(this._o, "api_friendly_battle");
            return null == t || null == e ? null : new _.AllyAttackModel(t, e)
        }, e.prototype.getRation = function () {
            return this._raw.ration
        }, e.prototype.getRationCombined = function () {
            return this._raw.ration_combined
        }, e.prototype.getDayRecord = function () {
            return 1 == this.raw.hasDayBattle() ? new s.BattleRecordDay(this._o) : null
        }, e
    }(r.BattleRecord);
    e.BattleRecordNight = u
}
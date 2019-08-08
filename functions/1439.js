const function1439 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(477),
        r = i(479),
        s = i(478),
        a = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "ration", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_combat_ration");
                    return null == t ? [] : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ration_combined", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_combat_ration_combined");
                    return null == t ? [] : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_air", {
                get: function () {
                    if (1 != n.ObjUtil.getNumber(this._o, "api_n_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_n_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_airatack");
                    return new o.AirSupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_hou", {
                get: function () {
                    if (2 != n.ObjUtil.getNumber(this._o, "api_n_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_n_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_hourai");
                    return new s.SupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_rai", {
                get: function () {
                    if (3 != n.ObjUtil.getNumber(this._o, "api_n_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_n_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_hourai");
                    return new s.SupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_taisen", {
                get: function () {
                    if (4 != n.ObjUtil.getNumber(this._o, "api_n_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_n_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_airatack");
                    return new o.AirSupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_hougeki");
                    return null == t ? null : new r.HougekiListNightData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki1", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_n_hougeki1");
                    return null == t ? null : new r.HougekiListNightData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki2", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_n_hougeki2");
                    return null == t ? null : new r.HougekiListNightData(t)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getTouchPlaneFriend = function () {
                if (null == this._o) return -1;
                var t = n.ObjUtil.getNumArray(this._o, "api_touch_plane");
                return null == t || t.length < 1 ? -1 : t[0]
            }, t.prototype.getTouchPlaneEnemy = function () {
                if (null == this._o) return -1;
                var t = n.ObjUtil.getNumArray(this._o, "api_touch_plane");
                return null == t || t.length < 2 ? -1 : t[1]
            }, t.prototype.getFlareLightFriend = function () {
                if (null == this._o) return -1;
                var t = n.ObjUtil.getNumArray(this._o, "api_flare_pos");
                return null == t ? -1 : t.length < 1 ? -1 : t[0]
            }, t.prototype.getFlareLightEnemy = function () {
                if (null == this._o) return -1;
                var t = n.ObjUtil.getNumArray(this._o, "api_flare_pos");
                return null == t ? -1 : t.length < 2 ? -1 : t[1]
            }, t.prototype.hasDayBattle = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_day_flag")
            }, t
        }();
    e.RawNightBattleData = a
}
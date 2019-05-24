const function1424 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(1425),
        r = i(1426),
        s = i(1428),
        a = i(1429),
        _ = i(1430),
        l = i(1431),
        u = i(474),
        c = i(475),
        h = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "sakuteki", {
                get: function () {
                    return new o.SakutekiData(this._o)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ration", {
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
            }), Object.defineProperty(t.prototype, "stage_flag", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "api_stage_flag")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "air_unit_jet", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_air_base_injection");
                    return null == t ? null : new _.AirUnitJetData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "air_war_jet", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_injection_kouku");
                    return null == t ? null : new r.AirWarData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "air_unit", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_air_base_attack");
                    if (null == t) return [];
                    if (0 == t.hasOwnProperty("length")) return [new s.AirUnitData(t)];
                    for (var e = [], i = 0, o = t; i < o.length; i++) {
                        var r = o[i];
                        e.push(new s.AirUnitData(r))
                    }
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "air_war", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_kouku");
                    return null == t ? null : new r.AirWarData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "air_war2", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_kouku2");
                    return null == t ? null : new r.AirWarData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_air", {
                get: function () {
                    if (1 != n.ObjUtil.getNumber(this._o, "api_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_airatack");
                    return new u.AirSupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_hou", {
                get: function () {
                    if (2 != n.ObjUtil.getNumber(this._o, "api_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_hourai");
                    return new c.SupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_rai", {
                get: function () {
                    if (3 != n.ObjUtil.getNumber(this._o, "api_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_hourai");
                    return new c.SupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "support_taisen", {
                get: function () {
                    if (4 != n.ObjUtil.getNumber(this._o, "api_support_flag")) return null;
                    var t = n.ObjUtil.getObject(this._o, "api_support_info");
                    if (null == t) return null;
                    var e = n.ObjUtil.getObject(t, "api_support_airatack");
                    return new u.AirSupportData(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "raigeki_opening", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_opening_atack");
                    return null == t ? null : new a.RaigekiData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "raigeki", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_raigeki");
                    return null == t ? null : new a.RaigekiData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki_opening", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_opening_taisen");
                    return null == t ? null : new l.HougekiListData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki1", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_hougeki1");
                    return null == t ? null : new l.HougekiListData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki2", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_hougeki2");
                    return null == t ? null : new l.HougekiListData(t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hougeki3", {
                get: function () {
                    var t = n.ObjUtil.getObjectArray(this._o, "api_hougeki3");
                    return null == t ? null : new l.HougekiListData(t)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isNightBattle = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_midnight_flag")
            }, t
        }();
    e.RawDayBattleData = h
}
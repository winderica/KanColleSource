const function1452 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(1453),
        o = i(7),
        r = i(1454),
        s = i(1455),
        a = i(1456),
        _ = i(1457),
        l = i(1458),
        u = function () {
            function t(t) {
                this._battle_model = t
            }
            return Object.defineProperty(t.prototype, "battle_model", {
                get: function () {
                    return this._battle_model
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_name", {
                get: function () {
                    return null != this._battle_model && 1 == this._battle_model.isPractice() ? "\u6f14\u7fd2" : o.ObjUtil.getString(this._o, "api_quest_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "user_name_f", {
                get: function () {
                    return null != this._battle_model && null != this._battle_model.deck_f ? this._battle_model.deck_f.user_name : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "user_level_f", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_member_lv")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deck_name_f", {
                get: function () {
                    return null != this._battle_model && null != this._battle_model.deck_f ? this._battle_model.deck_f.name : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deck_name_e", {
                get: function () {
                    var t = o.ObjUtil.getObject(this._o, "api_enemy_info");
                    return null != t ? o.ObjUtil.getString(t, "api_deck_name") : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deck_name_f2", {
                get: function () {
                    return null != this._battle_model && null != this._battle_model.deck_f ? this._battle_model.deck_f.name_second : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "battle_result_rank", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_win_rank", "E")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "base_exp", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_get_base_exp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "extra_war_results", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_get_exmap_rate")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "extra_useitem_mst_id", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_get_exmap_useitem_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "extra_result", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_mapcell_incentive")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setData = function (t) {
                this._o = t, this._battle_model.m1 = o.ObjUtil.getNumber(this._o, "api_m1"), this._battle_model.escape = this.getEscapeData()
            }, t.prototype.getMvpIndex = function (t) {
                return 0 == t ? o.ObjUtil.getNumber(this._o, "api_mvp") - 1 : o.ObjUtil.getNumber(this._o, "api_mvp_combined") - 1
            }, t.prototype.getLevelupInfoList = function (t) {
                return 0 == t ? o.ObjUtil.getObjectArray(this._o, "api_get_exp_lvup") : o.ObjUtil.getObjectArray(this._o, "api_get_exp_lvup_combined")
            }, t.prototype.getShipExp = function (t) {
                var e;
                return null == (e = 0 == t ? o.ObjUtil.getNumArray(this._o, "api_get_ship_exp") : o.ObjUtil.getNumArray(this._o, "api_get_ship_exp_combined")) ? [] : 1 == e.length && -1 == e[0] ? [] : (e = e.concat(), e.shift(), e)
            }, t.prototype.getBonusShip = function () {
                var t = o.ObjUtil.getObject(this._o, "api_get_ship");
                return null != t ? new r.BonusShipModel(t) : null
            }, t.prototype.getBonusSlot = function () {
                var t = o.ObjUtil.getObject(this._o, "api_get_slotitem");
                return null != t ? new s.BonusSlotModel(t) : null
            }, t.prototype.getBonusUseitem = function () {
                var t = o.ObjUtil.getObject(this._o, "api_get_useitem");
                return null != t ? new a.BonusUseitemModel(t) : null
            }, t.prototype.getMapBonus = function () {
                var t = o.ObjUtil.getObjectArray(this._o, "api_get_eventitem");
                if (null == t) return [];
                for (var e = [], i = 0, n = t; i < n.length; i++) {
                    var r = n[i];
                    e.push(new l.MapBonusModel(r))
                }
                return e
            }, t.prototype.isFirstClear = function () {
                return 1 == o.ObjUtil.getNumber(this._o, "api_first_clear")
            }, t.prototype.getOpenedMapIDs = function () {
                return o.ObjUtil.getNumArray(this._o, "api_next_map_ids", [])
            }, t.prototype.getLandingData = function () {
                return new _.LandingModel(o.ObjUtil.getObject(this._o, "api_landing_hp"))
            }, t.prototype.getEscapeData = function () {
                var t = o.ObjUtil.getObject(this._o, "api_escape");
                return new n.EscapeCandidateModel(t)
            }, t.prototype.getClearMapSuffix = function () {
                return o.ObjUtil.getString(this._o, "api_m_suffix")
            }, t.prototype.getClearOperationSuffix = function () {
                return o.ObjUtil.getString(this._o, "api_ope_suffix")
            }, t
        }();
    e.BattleResultData = u
}
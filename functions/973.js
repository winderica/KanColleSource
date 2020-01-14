const function973 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(974),
        r = i(975),
        s = i(976),
        a = i(977),
        _ = i(978),
        u = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "rashin_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_rashin_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "no", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "event_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_event_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "event_detail_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_event_kind")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "flavor_text", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_cell_flavor");
                    return null == t ? "" : n.ObjUtil.getString(t, "api_message")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "flavor_text_type", {
                get: function () {
                    var t = n.ObjUtil.getObject(this._o, "api_cell_flavor");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "api_type")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "jakeID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_production_kind")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "balloonID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_comment_kind")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_now", {
                get: function () {
                    return n.ObjUtil.getNumber(this._eventdata, "api_now_maphp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_max", {
                get: function () {
                    return n.ObjUtil.getNumber(this._eventdata, "api_max_maphp")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasCompass = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_rashin_flg")
            }, t.prototype.isDeadEnd = function () {
                return 0 == n.ObjUtil.getNumber(this._o, "api_next")
            }, t.prototype.isJunction = function () {
                var t = this.getSelectableRoutes();
                return null != t && !(t.length <= 1)
            }, t.prototype.getDropItems = function () {
                var t = n.ObjUtil.getObjectArray(this._o, "api_itemget");
                if (null == t) return [];
                if (1 == t.hasOwnProperty("length")) {
                    return t.map(function (t, e, i) {
                        return new r.DropItemModel(t)
                    })
                }
                return [new r.DropItemModel(t)]
            }, t.prototype.getHappeningData = function () {
                var t = n.ObjUtil.getObject(this._o, "api_happening");
                return new a.HappeningModel(t)
            }, t.prototype.getSelectableRoutes = function () {
                var t = n.ObjUtil.getObject(this._o, "api_select_route");
                return null == t ? null : n.ObjUtil.getNumArray(t, "api_select_cells")
            }, t.prototype.getEOSupplyItem = function () {
                var t = n.ObjUtil.getObject(this._o, "api_itemget_eo_comment");
                return null == t ? null : new s.EOItemModel(t)
            }, t.prototype.getEOSupplyBonusItem = function () {
                var t = n.ObjUtil.getObject(this._o, "api_itemget_eo_result");
                return null == t ? null : new s.EOItemModel(t)
            }, t.prototype.getEOSupplyWarResult = function () {
                return n.ObjUtil.getNumber(this._o, "api_get_eo_rate")
            }, t.prototype.getReplenishmentData = function () {
                var t = n.ObjUtil.getObject(this._o, "api_offshore_supply");
                return null == t ? null : new _.ReplenishmentModel(t)
            }, t.prototype.getAirReconnaissanceData = function () {
                var t = n.ObjUtil.getObject(this._o, "api_airsearch");
                return null == t ? null : new o.AirReconnaissanceModel(t)
            }, t.prototype.isUsableRation = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_ration_flag")
            }, t.prototype.getAnchorageRepair = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_anchorage_flag")
            }, t.prototype.getM1 = function () {
                return n.ObjUtil.getNumber(this._o, "api_m1")
            }, t.prototype.hasEventMapData = function () {
                return this._o.hasOwnProperty("api_eventmap")
            }, t.prototype.getAirraidDataObject = function () {
                return n.ObjUtil.getObject(this._o, "api_destruction_battle")
            }, t.prototype.hasBokuAirUnit = function () {
                var t = this.getAirraidDataObject();
                return null != t && null != n.ObjUtil.getObject(t, "api_map_squadron_plane")
            }, Object.defineProperty(t.prototype, "_eventdata", {
                get: function () {
                    return n.ObjUtil.getObject(this._o, "api_eventmap")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.NextModel = u
}
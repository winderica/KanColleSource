const function511 = function (t, e, i) {
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
    var o = i(0),
        r = i(7),
        s = i(261),
        a = function () {
            function t(t) {
                this._mst_id = 0, this._o = t
            }
            return Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return null != this._o ? r.ObjUtil.getNumber(this._o, "api_id") : this._mst_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "area_id", {
                get: function () {
                    var t = this._mst;
                    return null == t ? 0 : t.area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_no", {
                get: function () {
                    var t = this._mst;
                    return null == t ? 0 : t.map_no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "operation_name", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.operation_name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "operation_detail", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.operation_detail
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item_ids", {
                get: function () {
                    var t = this._mst;
                    return null == t ? [] : t.item_ids
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getAllowedDeckType = function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_sally_flag");
                if (t) {
                    var e = new s.AllowedDeckTypeModel;
                    return e.init(t), e
                }
                var i = this._mst;
                return null == i ? new s.AllowedDeckTypeModel : i.getAllowedDeckType()
            }, Object.defineProperty(t.prototype, "gauge_type", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_gauge_type", 0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getGaugeNum = function () {
                return r.ObjUtil.getNumber(this._o, "api_gauge_num", 1)
            }, Object.defineProperty(t.prototype, "defeat_required", {
                get: function () {
                    return null == this._o ? 0 : r.ObjUtil.getNumber(this._o, "api_required_defeat_count")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "defeat_count", {
                get: function () {
                    return null == this._o ? 0 : r.ObjUtil.getNumber(this._o, "api_defeat_count")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_now", {
                get: function () {
                    var t = this._evene_data;
                    return r.ObjUtil.getNumber(t, "api_now_maphp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_max", {
                get: function () {
                    var t = this._evene_data;
                    return r.ObjUtil.getNumber(t, "api_max_maphp")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "availableAirUnitCount", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_air_base_decks")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isCleared = function () {
                return 1 == r.ObjUtil.getNumber(this._o, "api_cleared")
            }, t.prototype.isOpened = function () {
                return null != this._o
            }, t.prototype.getSelectedOperationType = function () {
                var t = this._evene_data;
                return null == t ? 0 : r.ObjUtil.getNumber(t, "api_selected_rank", 0)
            }, Object.defineProperty(t.prototype, "_mst", {
                get: function () {
                    return o.default.model.map.getMapMst(this.mst_id)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "_evene_data", {
                get: function () {
                    return r.ObjUtil.getObject(this._o, "api_eventmap")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.MapModel = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setMstID = function (t) {
            this._mst_id = t
        }, e.prototype.changeOperation = function (t, e, i, n, o) {
            var r = this._evene_data;
            if (null != r) {
                this.getSelectedOperationType() != t && (r.api_selected_rank = t, r.api_gauge_num = e, r.api_gauge_type = i, r.api_max_maphp = n, r.api_now_maphp = o)
            }
        }, e.prototype.changeAllowedDeckType = function (t) {
            if (null != t) {
                var e = "api_sally_flag",
                    i = this._o;
                0 == i.hasOwnProperty(e) && (i[e] = []);
                for (var n = 0; n < 3; n++) i[e][n] = t[n]
            }
        }, e
    }(a);
    e.MapModelEdit = _
}
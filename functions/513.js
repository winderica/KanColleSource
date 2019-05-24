const function513 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(262),
        r = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "area_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_maparea_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_no", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "operation_name", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "api_opetext")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "operation_detail", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "api_infotext")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item_ids", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "api_item")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getAllowedDeckType = function () {
                var t = new o.AllowedDeckTypeModel,
                    e = n.ObjUtil.getNumArray(this._o, "api_sally_flag");
                return t.init(e), t
            }, t
        }();
    e.MapMstModel = r
}
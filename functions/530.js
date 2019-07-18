const function530 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(7),
        r = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "description", {
                get: function () {
                    var t = o.ObjUtil.getStrArray(this._o, "api_description");
                    return null != t && t.length > 0 ? t[0] : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "count", {
                get: function () {
                    return 44 == this.mstID ? n.default.model.basic.getCoinCount() : o.ObjUtil.getNumber(this._o, "api_count")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isUsable = function () {
                return 4 == this._use_type
            }, t.prototype.__setCount__ = function (t) {
                44 == this.mstID ? n.default.model.basic.setCoinCount(t) : this._o.api_count = t
            }, Object.defineProperty(t.prototype, "_use_type", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_usetype")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.UseItemModel = r
}
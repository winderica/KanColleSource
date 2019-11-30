const function534 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(43),
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
            }), Object.defineProperty(t.prototype, "cardType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length < 4 ? -1 : t[1]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "equipType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length < 4 ? -1 : t[2]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "equipTypeSp", {
                get: function () {
                    return 128 == this.mstID ? 38 : 142 == this.mstID ? 93 : 151 == this.mstID ? 94 : 281 == this.mstID ? 38 : this.equipType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "iconType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length < 4 ? -1 : t[3]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "planeIconType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length < 5 ? -1 : t[4]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "range", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_leng")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "karyoku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "raisou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_raig")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "taiku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tyku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "taisen", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tais")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "bakusou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_baku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "meichu", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houm")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "kaihi", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houk")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "sakuteki", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_saku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "soukou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_souk")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rarity", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_rare", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "version", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_version", "1")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "distance", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_distance")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cost", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_cost")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isPlane = function () {
                return -1 != n.PlaneConst.PLANE.indexOf(this.cardType)
            }, t.prototype.getMaterialsFromBroken = function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_broken");
                return {
                    fuel: t[0],
                    ammo: t[1],
                    steel: t[2],
                    baux: t[3]
                }
            }, t
        }();
    e.SlotitemMstModel = r
}
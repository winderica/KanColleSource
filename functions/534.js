const function534 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t, e, i) {
                void 0 === e && (e = 219), void 0 === i && (i = 14), this._barW_default = 219, this._barH_default = 14, this._o = t, this._barW_default = e, this._barH_default = i
            }
            return Object.defineProperty(t.prototype, "x", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "x")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "y", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "y")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "image_path", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "img")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "image_light_path", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "img_l");
                    return null == t || "" == t ? this.image_path + "_light" : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lightX", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "light");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "x")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lightY", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "light");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "y")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "barX", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "bar");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "x")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "barY", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "bar");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "y")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "barW", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "bar");
                    return null == t ? this._barW_default : n.ObjUtil.getNumber(t, "w", this._barW_default)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "barH", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "bar");
                    return null == t ? this._barH_default : n.ObjUtil.getNumber(t, "h", this._barH_default)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "barColor", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "bar");
                    return null == t ? 16711680 : n.ObjUtil.getNumber(t, "color", 16711680)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "transportX", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "transport");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "x")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "transportY", {
                get: function () {
                    var t = n.ObjUtil.getString(this._o, "transport");
                    return null == t ? 0 : n.ObjUtil.getNumber(t, "y")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isTransport = function () {
                return this._o.hasOwnProperty("transport")
            }, t
        }();
    e.GaugeModel = o
}
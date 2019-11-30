const function1083 = function (t, e, i) {
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
    var o = i(15),
        r = i(73),
        s = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "cardType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length <= 1 ? 0 : t[1]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "equipType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length <= 2 ? 0 : t[2]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "iconType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    return null == t || t.length <= 3 ? 0 : t[3]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "soukou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_souk")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "karyoku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "raisou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_raig")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "baku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_baku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "taiku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tyku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "taisen", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tais")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "meichu", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houm")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kaihi", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houk")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "sakuteki", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_saku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "syatei", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_leng")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_info")
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.AlbumModelBase);
    e.AlbumSlotModel = s
}
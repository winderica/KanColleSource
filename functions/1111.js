const function1111 = function (t, e, i) {
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
        r = i(76),
        s = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "sType", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_stype")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_sinfo")
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
            }), Object.defineProperty(e.prototype, "taiku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tyku")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kaihi", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_kaih")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "taikyu", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_taik")
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.hasTaiha = function (t) {
                var e = this.mst_ids.indexOf(t);
                if (e < 0) return !1;
                var i = o.ObjUtil.getObjectArray(this._o, "api_state");
                return !(null == i || i.length <= e) && (!(null == (i = i[e]) || i.length <= 1) && 1 == i[1])
            }, e.prototype.isMarriage = function (t) {
                var e = this.mst_ids.indexOf(t);
                if (e < 0) return !1;
                var i = o.ObjUtil.getObjectArray(this._o, "api_state");
                return !(null == i || i.length <= e) && (!(null == (i = i[e]) || i.length <= 2) && 1 == i[2])
            }, e.prototype.hasMarriage = function () {
                var t = o.ObjUtil.getObjectArray(this._o, "api_state");
                if (null == t) return !1;
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e];
                    if (!(null == n || n.length <= 2) && 1 == n[2]) return !0
                }
                return !1
            }, e.prototype.extraVoices = function () {
                return o.ObjUtil.getObjectArray(this._o, "api_q_voice_info")
            }, e
        }(r.AlbumModelBase);
    e.AlbumShipModel = s
}
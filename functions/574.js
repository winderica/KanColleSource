const function574 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "filename", {
                get: function () {
                    return n.ObjUtil.getString(this._o, "filename")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "frame", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "frame")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "framerand", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "framerand")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "alpha");
                    return null == t || t.length < 2 ? [1, 1] : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "offsetData", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "offset")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getSEID = function () {
                var t = n.ObjUtil.getString(this._o, "se", null);
                if (null == t) return null;
                var e = t.split(":");
                if (e.length > 1) {
                    var i = parseInt(e[1]);
                    return i = Math.min(100, Math.max(0, i)), 100 * Math.random() < i ? e[0] : null
                }
                return t
            }, t.prototype.getBGMAction = function () {
                return n.ObjUtil.getString(this._o, "bgm", null)
            }, t.prototype.getPopupOption = function () {
                var t = n.ObjUtil.getObject(this._o, "popup", null);
                if (null == t) return null;
                var e = n.ObjUtil.getString(t, "src", null);
                return null == e ? null : {
                    src: e,
                    se_open: n.ObjUtil.getString(t, "se_open"),
                    se_close: n.ObjUtil.getString(t, "se_close"),
                    offset_x: n.ObjUtil.getNumber(t, "offset_x"),
                    offset_y: n.ObjUtil.getNumber(t, "offset_y")
                }
            }, t.prototype.getStateChangeOption = function () {
                return n.ObjUtil.getString(this._o, "state", null)
            }, t
        }();
    e.FurnitureKeyFrameModel = o
}
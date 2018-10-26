const function514 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "version", {
            get: function () {
                var t = n.ObjUtil.getStrArray(this._o, "api_version");
                return null != t && t.length > 0 ? t[0] : "1"
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "version_voice", {
            get: function () {
                var t = n.ObjUtil.getStrArray(this._o, "api_version");
                return null != t && t.length > 1 ? t[1] : "1"
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "version_voice_boko", {
            get: function () {
                var t = n.ObjUtil.getStrArray(this._o, "api_version");
                return null != t && t.length > 2 ? t[2] : "1"
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "unique_key", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_filename")
            }, enumerable: !0, configurable: !0
        }), t.prototype.getPortOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_boko_d" : "api_boko_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getCenterOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_kaizo_d" : "api_kaizo_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getLeftOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_ensyuf_d" : "api_ensyuf_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getMapOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_map_d" : "api_map_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getRemodelPowupUIOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_kaisyu_d" : "api_kaisyu_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getBattleOffset = function (t) {
            void 0 === t && (t = !1);
            var e = t ? "api_battle_d" : "api_battle_n", i = n.ObjUtil.getNumArray(this._o, e);
            return null == i || i.length < 2 ? new PIXI.Point(0, 0) : new PIXI.Point(i[0], i[1])
        }, t.prototype.getFaceRect = function (t) {
            void 0 === t && (t = !1);
            var e = n.ObjUtil.getNumArray(this._o, "api_weda"), i = n.ObjUtil.getNumArray(this._o, "api_wedb");
            return new PIXI.Rectangle(e[0], e[1], i[0], i[1])
        }, t
    }();
    e.ShipGraphModel = o
}
const function495 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return Object.defineProperty(t.prototype, "mapID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "areaID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_maparea_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mapNo", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mapBGMID", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_moving_bgm")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getBGM = function (t, e) {
                var i;
                i = 0 == e ? n.ObjUtil.getNumArray(this._o, "api_map_bgm") : n.ObjUtil.getNumArray(this._o, "api_boss_bgm");
                var o = t ? 1 : 0;
                return null == i || i.length <= o ? t ? 2 : 1 : i[o]
            }, t.prototype.getDayBGM = function (t) {
                return this.getBGM(!1, t)
            }, t.prototype.getNightBGM = function (t) {
                return this.getBGM(!0, t)
            }, t
        }();
    e.BattleBGMMstModel = o
}
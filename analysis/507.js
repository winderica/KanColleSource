/*
 * the function called by `506.js`
 * map - 出撃海域カテゴリ(鎮守府海域, 南西諸島海域, etc.) (api_start2.api_mst_maparea)
 */
const function507 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 海域カテゴリID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 海域カテゴリ名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.MapAreaModel = o
}
/*
 * the function called by `491.js`
 * movable furniture (api_start2.api_mst_furnituregraph)
 */
const function492 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 家具ID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // カテゴリ
        Object.defineProperty(t.prototype, "typeID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_type")
            }, enumerable: !0, configurable: !0
        });
        // カテゴリ内通し番号
        Object.defineProperty(t.prototype, "numberID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_no")
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.FurnitureGraphModel = o
}
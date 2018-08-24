/*
 * the function called by `481.js`
 * 母港BGM
 */
const function483 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 音楽ID？
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 曲名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.BGMMstModel = o
}
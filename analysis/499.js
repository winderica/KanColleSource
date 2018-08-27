/*
 * the function called by `498.js`
 * log (api_port/port.api_log)
 */
const function499 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 通知タイプ　文字列　1から 入渠, 工廠, 遠征, 支給?, 演習, 勲章?, 出撃, 任務?, 申請?, 昇格?, 図鑑, 達成?, 改造?
        Object.defineProperty(t.prototype, "type", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_type")
            }, enumerable: !0, configurable: !0
        });
        // メッセージ
        Object.defineProperty(t.prototype, "message", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_message")
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.LogModel = o
}
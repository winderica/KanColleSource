/*
 * the function called by `520.js`
 * items (including resources) (api_start2.api_mst_useitem)
 */
const function521 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(7), r = function () {
        function t(t) {
            this._o = t
        }

        // アイテムID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // アイテム名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // [0]=アイテムの説明, [1]=(家具箱のみ)入手できる家具コインの枚数
        Object.defineProperty(t.prototype, "description", {
            get: function () {
                var t = o.ObjUtil.getStrArray(this._o, "api_description");
                return null != t && t.length > 0 ? t[0] : ""
            }, enumerable: !0, configurable: !0
        });
        // 個数
        Object.defineProperty(t.prototype, "count", {
            get: function () {
                // 44: 家具コイン
                return 44 == this.mstID ? n.default.model.basic.getCoinCount() : o.ObjUtil.getNumber(this._o, "api_count")
            }, enumerable: !0, configurable: !0
        });
        // 使用形態　0=使用不可, 1=高速修復材, 2=高速建造材, 3=開発資材, 4=使用可能, etc.
        Object.defineProperty(t.prototype, "_use_type", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_usetype")
            }, enumerable: !0, configurable: !0
        });
        t.prototype.isUsable = function () {
            return 4 == this._use_type
        };
        t.prototype.__setCount__ = function (t) {
            44 == this.mstID ? n.default.model.basic.setCoinCount(t) : this._o.api_count = t
        };

        return t
    }();
    e.UseItemModel = r
}
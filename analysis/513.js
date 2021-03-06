/*
 * called by `512.js`
 * 課金アイテム (api_start2.api_mst_payitem)
 */
const function513 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // アイテムID
        Object.defineProperty(t.prototype, "id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 商品名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // 商品説明
        Object.defineProperty(t.prototype, "description", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_description")
            }, enumerable: !0, configurable: !0
        });
        // 価格
        Object.defineProperty(t.prototype, "price", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_price")
            }, enumerable: !0, configurable: !0
        });
        // 商品説明 without <br> tag
        Object.defineProperty(t.prototype, "description_at_shop", {
            get: function () {
                var t = "api_shop_description";
                return 1 == this._o.hasOwnProperty(t) ? this._o[t] : this.description
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.PayItemModel = o
}
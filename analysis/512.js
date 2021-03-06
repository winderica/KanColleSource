/*
 * called by `482.js`
 * 課金アイテム (api_start2.api_mst_item_shop)
 */
const function512 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(7), r = i(513), s = function () {
        function t() {
            this._dic = {}
        }

        // get item data
        t.prototype.getData = function (t) {
            var e = t.toString();
            return 1 == this._dic.hasOwnProperty(e) ? this._dic[e] : null
        };
        // get item on sale
        t.prototype.getOrder = function (t) {
            return null == this._orders ? [] : this._orders.length <= t ? [] : this._orders[t]
        };
        return t
    }();
    e.PayItemModelHolder = s;
    var a = function (t) {
        function e() {
            return t.call(this) || this
        }

        n(e, t);
        // set items data
        e.prototype.setData = function (t) {
            if (this._dic = {}, null != t) for (var e = 0; e < t.length; e++) {
                var i = t[e], n = new r.PayItemModel(i), o = n.id;
                o > 0 && (this._dic[o] = n)
            }
        };
        // set items on sale
        e.prototype.setOrders = function (t) {
            if (this._orders = [], null != t) {
                /*
                 * api_cabinet_1	：棚 p.1　api_mst_payitemのidのリスト
                 * api_cabinet_2	：棚 p.2　-1は空き
                 */
                var e = o.ObjUtil.getNumArray(t, "api_cabinet_1");
                null == e ? this._orders.push([]) : this._orders.push(e);
                e = o.ObjUtil.getNumArray(t, "api_cabinet_2");
                null == e ? this._orders.push([]) : this._orders.push(e)
            }
        };
        return e
    }(s);
    e.PayItemModelHolderEdit = a
}
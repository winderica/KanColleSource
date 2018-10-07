/*
 * the function called by `493.js`
 * furniture data (api_start2.api_mst_furniture)
 */
const function494 = function (t, e, i) {
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
    var o = i(7), r = function () {
        function t(t) {
            this._hasFlag = false, this._o = t
        }

        // 家具ID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return this._o.api_id
            }, enumerable: !0, configurable: !0
        });
        // カテゴリ内通し番号 0から始まる
        Object.defineProperty(t.prototype, "no", {
            get: function () {
                return this._o.api_no
            }, enumerable: !0, configurable: !0
        });
        // カテゴリ 0=床, 1=壁紙, 2=窓, 3=壁掛け, 4=家具, 5=机
        Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this._o.api_type
            }, enumerable: !0, configurable: !0
        });
        // 家具名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return this._o.api_title
            }, enumerable: !0, configurable: !0
        });
        // ? (only window has non-zero `api_outside_id` property?)
        Object.defineProperty(t.prototype, "outside", {
            get: function () {
                return this._o.hasOwnProperty("api_outside_id") ? this._o.api_outside_id : 4
            }, enumerable: !0, configurable: !0
        });
        // 説明
        Object.defineProperty(t.prototype, "description", {
            get: function () {
                return this._o.api_description
            }, enumerable: !0, configurable: !0
        });
        // 価格
        Object.defineProperty(t.prototype, "price", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_price")
            }, enumerable: !0, configurable: !0
        });
        // レアリティ
        Object.defineProperty(t.prototype, "rarity", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_rarity")
            }, enumerable: !0, configurable: !0
        });
        // ?
        Object.defineProperty(t.prototype, "seasonID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_season")
            }, enumerable: !0, configurable: !0
        });
        // ? (value is always '1'?)
        Object.defineProperty(t.prototype, "version", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_version", "1")
            }, enumerable: !0, configurable: !0
        });
        t.prototype.has = function () {
            return this._hasFlag
        };
        // 販売中?
        t.prototype.isOnSale = function () {
            return 1 == o.ObjUtil.getNumber(this._o, "api_saleflg")
        };
        // 職人必要: [2000, 20000)
        t.prototype.isNeedCraftsman = function () {
            return this.price >= 2e3 && this.price < 2e4
        };
        // 長者向け: [100000, )
        t.prototype.isHighGrade = function () {
            return this.price >= 1e5
        };
        // ?
        t.prototype.isActive = function () {
            return 1 == this._o.api_active_flag
        };
        // discount using Craftsman: 0.1 * (price - 100000)
        t.prototype.getDiscountPrice = function () {
            if (0 == this.isHighGrade()) return this.price;
            var t = .1 * (this.price - 1e5);
            return t = Math.max(t, 0), Math.floor(t)
        };
        // get version
        Object.defineProperty(t.prototype, "getVersion", {
            get: function () {
                return this._o.api_version
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.FurnitureModel = r;
    // class s extends r
    var s = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        e.prototype.updateHasFlag = function (t) {
            this._hasFlag = t
        };
        return e
    }(r);
    e.FurnitureModelEdit = s
}
const function1093 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7),
        r = function () {
            function t() {
                this._dic = {}
            }
            return t.prototype.getCount = function (t) {
                var e = this.getData(t);
                return null == e ? 0 : e.count
            }, t.prototype.getData = function (t) {
                return 1 == this._dic.hasOwnProperty(t.toString()) ? this._dic[t] : null
            }, t.prototype.setData = function (t) {
                if (this._dic = {}, null != t)
                    for (var e = 0, i = t; e < i.length; e++) {
                        var n = i[e],
                            o = new a(n);
                        this._dic[o.id] = o
                    }
            }, t
        }();
    e.PurchasedItemModelHolder = r;
    var s = function () {
        function t(t) {
            this._o = t
        }
        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return parseInt(o.ObjUtil.getString(this._o, "api_payitem_id"))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "description", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_description")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "count", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_count")
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.PurchasedItemModel = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setCount = function (t) {
            this._o.api_count = t
        }, e
    }(s);
    e.PurchasedItemModelEdit = a
}
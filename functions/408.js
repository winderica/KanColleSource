const function408 = function (t, e, i) {
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
    var o = i(0),
        r = i(10),
        s = function (t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this) || this;
                return n._url = "api_req_furniture/buy", n._model = e, n._discount = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_type = this._model.type, this._post_data.api_no = this._model.no, 1 == this._discount && (this._post_data.api_discount_flag = 1), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                if (1 == this._discount || 1 == this._model.isNeedCraftsman()) {
                    var e = o.default.model.useItem.get(52);
                    e.__setCount__(e.count - 1)
                }
                var i = this._model.price;
                1 == this._discount && (i = this._model.getDiscountPrice());
                var n = o.default.model.useItem.get(44);
                n.__setCount__(n.count - i), this._model.updateHasFlag(!0), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.FurnitureExchangeAPI = s
}
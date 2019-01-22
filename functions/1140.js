const function1140 = function (t, e, i) {
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
    var o = i(10),
        r = i(7),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_member/payitemuse", n._result = new _, n._mst_id = e, n._force = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_payitem_id = this._mst_id, this._post_data.api_force_flag = this._force ? 1 : 0, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._result.setData(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.PurchasedItemPickupAPI = s;
    var a = function () {
        function t() {}
        return Object.defineProperty(t.prototype, "cautionFlg", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_caution_flag")
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.hasCaution = function () {
            return this.cautionFlg >= 1
        }, t
    }();
    e.PurchasedItemPickupResult = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setData = function (t) {
            this._o = t
        }, e
    }(a)
}
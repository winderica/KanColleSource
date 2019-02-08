const function1152 = function (t, e, i) {
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
    var o = i(11),
        r = i(14),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._result = -1, e._url = "api_dmm_payment/paycheck", e
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._completedEnd = function () {
                this._result = r.ObjUtil.getNumber(this._raw_data, "api_check_value", -1), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.PayCheckAPI = s
}
const function934 = function (t, e, i) {
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
    var o = i(9),
        r = i(935),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                return i._url = "api_get_member/practice", i._res_model = new r.PracticeAPIModel, i._debug = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_model", {
                get: function () {
                    return this._res_model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._completedEnd = function () {
                this._res_model.setData(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.PracticeAPI = s
}
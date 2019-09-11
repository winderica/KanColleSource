const function1041 = function (t, e, i) {
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
        r = i(7),
        s = function (t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this) || this;
                return n._url = "api_req_practice/change_matching_kind", n._selected_type = e, n._res_model = new a, n._debug = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_model", {
                get: function () {
                    return this._res_model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_selected_kind = this._selected_type, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._res_model.setData(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.ChangeMatchingAPI = s;
    var a = function () {
        function t() {}
        return t.prototype.setData = function (t) {
            this._o = t
        }, t.prototype.isSucceed = function () {
            return 1 == r.ObjUtil.getNumber(this._o, "api_update_flag")
        }, t
    }();
    e.ChangeMatchingAPIResultModel = a
}
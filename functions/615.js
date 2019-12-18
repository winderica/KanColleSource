const function615 = function (t, e, i) {
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
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_member/set_friendly_request", n._flag = e, n._type = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_request_flag = this._flag, this._post_data.api_request_type = this._type, t.prototype._connect.call(this)
            }, e
        }(o.APIBase);
    e.SetFriendlyRequestAPI = r
}
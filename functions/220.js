const function220 = function (t, e, i) {
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
        r = i(11),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._url = "api_req_hensei/combined", i.api_combined_type = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_combined_type = this.api_combined_type, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                o.default.model.deck.combined.__update__(this.api_combined_type), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.CombinedAPI = s
}
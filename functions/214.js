const function214 = function (t, e, i) {
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
        r = i(0),
        s = function (t) {
            function e(e, i, n, o) {
                void 0 === e && (e = !1);
                var r = t.call(this) || this;
                return r._url = "api_req_hensei/change", r._debug = e, r.api_id = i, r.api_ship_idx = n, r.api_ship_id = o, r
            }
            return n(e, t), e.prototype._connect = function () {
                1 == this._debug && (-2 == this.api_ship_id || this.api_ship_id), this._post_data.api_id = this.api_id, this._post_data.api_ship_idx = this.api_ship_idx, this._post_data.api_ship_id = this.api_ship_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.default.model.deck.get(this.api_id); - 2 == this.api_ship_id ? e.__removeAll__() : -1 == this.api_ship_id ? e.__remove__(this.api_ship_idx) : e.__change__(this.api_ship_idx, this.api_ship_id), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.ChangeAPI = s
}
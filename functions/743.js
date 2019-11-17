const function743 = function (t, e, i) {
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
        s = i(15),
        a = function (t) {
            function e(e, i) {
                void 0 === e && (e = !1);
                var n = t.call(this) || this;
                return n._url = "api_req_hensei/lock", n._debug = e, n.api_ship_id = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_ship_id = this.api_ship_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = 1 == s.ObjUtil.getNumber(this._raw_data, "api_locked"),
                    i = o.default.model.ship.get(this.api_ship_id);
                null != i && i.__setLocked__(e), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.ShipLockAPI = a
}
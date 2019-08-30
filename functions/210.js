const function210 = function (t, e, i) {
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
        r = i(9),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var i = t.call(this) || this;
                return i._mem_id = 0, i._mem_id = e, i._url = "api_get_member/ship2", i
            }
            return n(e, t), e.prototype._connect = function () {
                this._mem_id > 0 && (this._post_data.api_shipid = this._mem_id), this._post_data.api_sort_key = 5, this._post_data.spi_sort_order = 2, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                if (this._mem_id > 0) {
                    var e = this._raw_data,
                        i = e[0];
                    o.default.model.ship.updateData(i)
                } else o.default.model.ship.setData(this._raw_data);
                t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.UserShipAPI = s
}
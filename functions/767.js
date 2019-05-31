const function767 = function (t, e, i) {
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
        r = i(0),
        s = i(7),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_req_kaisou/slot_exchange_index", o.api_id = e, o.api_src_idx = i, o.api_dst_idx = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_id = this.api_id, this._post_data.api_src_idx = this.api_src_idx, this._post_data.api_dst_idx = this.api_dst_idx, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = this._raw_data.api_ship_data;
                r.default.model.ship.updateData(e), this._set_bauxite(), t.prototype._completedEnd.call(this)
            }, e.prototype._set_bauxite = function () {
                if (this._raw_data && this._raw_data.hasOwnProperty("api_bauxite")) {
                    var t = s.ObjUtil.getNumber(this._raw_data, "api_bauxite");
                    r.default.model.useItem.get(34).__setCount__(t)
                }
            }, e
        }(o.APIBase);
    e.SlotExchangeIndexAPI = a
}
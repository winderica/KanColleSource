const function763 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(10), r = i(0), s = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._url = "api_req_kaisou/slot_exchange_index", o.api_id = e, o.api_src_idx = i, o.api_dst_idx = n, o
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_id = this.api_id, this._post_data.api_src_idx = this.api_src_idx, this._post_data.api_dst_idx = this.api_dst_idx, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = this._raw_data.api_slot;
            r.default.model.ship.get(this.api_id).__updateSlotAll__(e), t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.SlotExchangeIndexAPI = s
}
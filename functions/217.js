const function217 = function (t, e, i) {
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
            return o._url = "api_req_kaisou/slotset", o.api_id = e, o.api_item_id = i, o.api_slot_idx = n, o
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_id = this.api_id, this._post_data.api_item_id = this.api_item_id, this._post_data.api_slot_idx = this.api_slot_idx, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            r.default.model.ship.get(this.api_id).__updateSlot__(this.api_slot_idx, this.api_item_id), t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.SlotSetAPI = s
}
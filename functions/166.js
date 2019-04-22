const function166 = function (t, e, i) {
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
        r = i(7),
        s = i(10),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._url = "api_get_member/ship3", i.api_id = e, i
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_shipid = this.api_id, this._post_data.api_sort_key = "1", this._post_data.spi_sort_order = "1", t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.ObjUtil.getObjectArray(this._raw_data, "api_deck_data"),
                    i = r.ObjUtil.getObjectArray(this._raw_data, "api_ship_data"),
                    n = r.ObjUtil.getObjectArray(this._raw_data, "api_slot_data");
                o.default.model.deck.setData(e);
                for (var s = 0, a = i; s < a.length; s++) {
                    var _ = a[s];
                    o.default.model.ship.updateData(_)
                }
                o.default.model.slot.setUnsetData(n), t.prototype._completedEnd.call(this)
            }, e
        }(s.APIBase);
    e.Ship3API = a
}
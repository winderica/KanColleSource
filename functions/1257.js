const function1257 = function (t, e, i) {
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
        r = i(10),
        s = i(7),
        a = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._url = "api_get_member/ship_deck", r._deck_ids = e, r._area_id = i, r._map_no = n, r._cell_no = o, r
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_deck_rid = this._deck_ids.join(","), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                for (var e = s.ObjUtil.getObjectArray(this._raw_data, "api_deck_data"), i = 0, n = e; i < n.length; i++) {
                    var r = n[i];
                    o.default.model.deck.updateData(r)
                }
                for (var a = s.ObjUtil.getObjectArray(this._raw_data, "api_ship_data"), _ = 0, l = a; _ < l.length; _++) {
                    var r = l[_];
                    o.default.model.ship.updateData(r)
                }
                t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.APIShipDeck = a
}
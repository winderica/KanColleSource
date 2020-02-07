const function840 = function (t, e, i) {
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
        s = i(156),
        a = i(15),
        _ = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_req_kaisou/powerup", o.api_id = e, o.api_id_items = i, o._type = n, o
            }
            return n(e, t), Object.defineProperty(e.prototype, "api_powerup_flag", {
                get: function () {
                    return 1 == this._raw_data.api_powerup_flag
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "api_ship", {
                get: function () {
                    return this._raw_data.api_ship
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "api_deck", {
                get: function () {
                    return this._raw_data.api_deck
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_id = this.api_id, this._post_data.api_id_items = this.api_id_items.toString(), this._post_data.api_slot_dest_flag = this._type, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                for (var e = 0 === this._type, i = 0; i < this.api_id_items.length; i++) {
                    var n = this.api_id_items[i];
                    o.default.model.ship.delete(n, e)
                }
                var r = a.ObjUtil.getObjectArray(this._raw_data, "api_unset_list");
                if (null != r && e)
                    for (var _ = 0, u = r; _ < u.length; _++) {
                        var l = u[_],
                            c = a.ObjUtil.getNumber(l, "api_type3No"),
                            h = a.ObjUtil.getNumArray(l, "api_slot_list");
                        o.default.model.slot.updateUnsetData(c, h)
                    }
                var p = new s.ShipModelEdit(this.api_ship);
                o.default.model.ship.get(p.memID).__update__(this.api_ship), o.default.model.deck.setData(this.api_deck), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.PowerUpAPI = _
}
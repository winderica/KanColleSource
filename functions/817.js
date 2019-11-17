const function817 = function (t, e, i) {
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
        s = i(153),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_kaisou/powerup", n.api_id = e, n.api_id_items = i, n
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
                this._post_data.api_id = this.api_id, this._post_data.api_id_items = this.api_id_items.toString(), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                for (var e = 0; e < this.api_id_items.length; e++) {
                    var i = this.api_id_items[e];
                    o.default.model.ship.delete(i, !1)
                }
                var n = new s.ShipModelEdit(this.api_ship);
                o.default.model.ship.get(n.memID).__update__(this.api_ship), o.default.model.deck.setData(this.api_deck), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.PowerUpAPI = a
}
const function731 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = i(0),
        r = function () {
            function t(t, e) {
                this._preset_id = -1, this._preset_id = t, this._o = e, this._createShipData()
            }
            return Object.defineProperty(t.prototype, "presetID", {
                get: function () {
                    return this._preset_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deckName", {
                get: function () {
                    return null == this._o ? "" : n.ObjUtil.getString(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ships", {
                get: function () {
                    return this._ships
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getShipCount = function () {
                var t = 0,
                    e = this._getShipMemIds();
                if (null == e) return 0;
                for (var i = 0; i < e.length; i++) - 1 != e[i] && t++;
                return t
            }, t.prototype.getRealShipCount = function () {
                for (var t = 0, e = 0; e < this._ships.length; e++) null != this._ships[e] && t++;
                return t
            }, t.prototype.getFrontShip = function () {
                for (var t = 0; t < this._ships.length; t++)
                    if (null != this._ships[t]) return this._ships[t];
                return null
            }, t.prototype.hasOtherDeckShip = function (t) {
                for (var e = 0; e < this._ships.length; e++)
                    if (this.isOtherDeckShip(e, t)) return !0;
                return !1
            }, t.prototype.isOtherDeckShip = function (t, e) {
                if (null != this._ships[t]) {
                    var i = this._ships[t],
                        n = o.default.model.deck.isInDeck(i.memID);
                    return null != n && n[0] != e
                }
                return !1
            }, t.prototype.getFirstOtherDeckShip = function (t) {
                for (var e = 0; e < this._ships.length; e++)
                    if (this.isOtherDeckShip(e, t)) return this._ships[e];
                return null
            }, t.prototype.hasLostShip = function () {
                for (var t = 0; t < this._ships.length; t++)
                    if (this.isLostShip(t)) return !0;
                return !1
            }, t.prototype.isLostShip = function (t) {
                return null == this._ships[t] && -1 != this._getShipMemIds()[t]
            }, t.prototype.getShipsAfterExpanded = function (t) {
                for (var e = new Array, i = 0; i < this._ships.length; i++) {
                    var n = this._ships[i];
                    null != n && 0 == this.isOtherDeckShip(i, t) && 0 == this.isLostShip(i) && e.push(n)
                }
                return e
            }, t.prototype.__deleteLostShips__ = function () {
                for (var t = [], e = this._getShipMemIds(), i = 0; i < e.length; i++) 0 == this.isLostShip(i) && t.push(e[i]);
                for (; t.length < 6;) t.push(-1);
                this._o.api_ship = t
            }, t.prototype._createShipData = function () {
                this._ships = new Array;
                var t = this._getShipMemIds();
                if (null != t)
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e],
                            n = o.default.model.ship.get(i);
                        this._ships.push(n)
                    }
            }, t.prototype._getShipMemIds = function () {
                return n.ObjUtil.getObjectArray(this._o, "api_ship", [])
            }, t
        }();
    e.PresetModel = r
}
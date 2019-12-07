const function228 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(265),
        o = i(171),
        r = function () {
            function t(t, e, i, o, r, s, a, _, l) {
                if (void 0 === _ && (_ = -1), void 0 === l && (l = ""), this._medal_num = 0, this._id_second = -1, this._name_second = "", this._practice = e, this._medal_num = i, this._user_name = o, t instanceof n.DeckModel) {
                    var u = t;
                    this._id = u.mstID, this._type = u.getCombinedType(), this._name = u.name, this.updateShipList(u), this._id_second = u.getSubDeckID(), this._name_second = u.getSubDeckName()
                } else this._id = t, this._type = r, this._name = s, this._ships = a.concat(), this._id_second = _, this._name_second = l;
                if (0 != this._type) {
                    for (; this._ships.length < 12;) this._ships.push(null);
                    if (this._ships.length > 12) throw new Error("DeckModelReplica")
                } else {
                    for (; this._ships.length < 6;) this._ships.push(null);
                    if (this._ships.length > 7) throw new Error("DeckModelReplica")
                }
            }
            return Object.defineProperty(t.prototype, "practice", {
                get: function () {
                    return this._practice
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return this._id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "user_name", {
                get: function () {
                    return this._user_name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return this._name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return this._type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "medal_num", {
                get: function () {
                    return this._medal_num
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ships", {
                get: function () {
                    return this._ships
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ships_main", {
                get: function () {
                    if (0 != this._type) return this._ships.slice(0, 6);
                    for (var t = 6; t < this._ships.length; t++)
                        if (null == this._ships[t]) return this._ships.slice(0, t);
                    return this._ships
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ships_sub", {
                get: function () {
                    return 0 != this._type ? this._ships.slice(6) : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "formation", {
                get: function () {
                    return this._formation_id
                },
                set: function (t) {
                    this._formation_id = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "id_second", {
                get: function () {
                    return this._id_second
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name_second", {
                get: function () {
                    return this._name_second
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isCombined = function () {
                return 0 != this._type
            }, t.prototype.isYugeki = function () {
                return 12 != this._ships.length && (this._ships.length >= 7 && null != this._ships[6])
            }, t.prototype.getCount = function () {
                var t = 0;
                if (null != this._ships)
                    for (var e = 0, i = this._ships; e < i.length; e++) {
                        var n = i[e];
                        null != n && t++
                    }
                return t
            }, t.prototype.getCountMainDeck = function () {
                if (null == this._ships) return 0;
                var t = 0;
                t = 0 == this._type ? this._ships.length : 6;
                for (var e = 0, i = 0; i < t; i++) {
                    var n = this._ships[i];
                    null != n && (1 != n.isTaihi() && e++)
                }
                return e
            }, t.prototype.getCountSubDeck = function () {
                if (null == this._ships) return 0;
                if (0 == this._type) return 0;
                for (var t = 0, e = 6; e < this._ships.length; e++) {
                    var i = this._ships[e];
                    null != i && (1 != i.isTaihi() && t++)
                }
                return t
            }, t.prototype.isSubmarineAll = function () {
                if (null == this._ships) return !1;
                for (var t = 0, e = this._ships; t < e.length; t++) {
                    var i = e[t];
                    if (null != i && 0 == i.isSubMarine()) return !1
                }
                return !0
            }, t.prototype.getTotalHP = function () {
                var t = 0;
                if (null == this._ships) return 0;
                for (var e = 0, i = this._ships; e < i.length; e++) {
                    var n = i[e];
                    null != n && (t += n.hp_now)
                }
                return t
            }, t.prototype.updateShipList = function (t) {
                var e = this._ships;
                this._ships = [];
                for (var i = t.getShipListAll(), n = 0; n < i.length; n++) {
                    var r = i[n];
                    if (null == r) this._ships.push(null);
                    else {
                        var s = o.ShipModelReplica.convert(0, this.practice, n, r);
                        if (null != e && e.length > n) {
                            var a = e[n];
                            null != a && s.initializeTaihi(a.isTaihi())
                        }
                        this._ships.push(s)
                    }
                }
            }, t
        }();
    e.DeckModelReplica = r
}